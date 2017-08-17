/**
 * @class ImageUpload
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import styles from './imageUpload.scss';

const errorTime = 5000;

export class ImageUpload extends React.Component {
  static propTypes = {
    onFilesUploaded: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = { acceptedFiles: [], rejectedFiles: [] };

    this.onDrop = this.onDrop.bind(this);
    this.setError = this.setError.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  componentWillUnmount() {
    // important to prevent memory leaks
    this.state.acceptedFiles.forEach(file => window.URL.revokeObjectURL(file.preview));
  }

  onDrop(accepted, rejected) {
    if (this.state.acceptedFiles.length < 5) {
      this.uploadFiles(accepted);
      this.setState({ acceptedFiles: this.state.acceptedFiles.concat(accepted), rejectedFiles: rejected });
    } else {
      this.setError('You can only upload 5 pictures');
    }

    if (rejected.length > 0) {
      setTimeout(() => {
        this.setState({ rejectedFiles: [] });
      }, errorTime);
    }
  }

  setError(message) {
    this.setState({ errorMessage: message });

    setTimeout(() => {
      this.setState({ errorMessage: undefined });
    }, errorTime);
  }

  uploadFiles(files) {
    const formData = new FormData();

    // @TODO: handle multiple files!!!!
    formData.append('photos', files[0]);

    fetch('http://localhost:4000/image-upload', {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then((json) => {
      // mark the completed ones
      const acceptedFiles = this.state.acceptedFiles.map((acceptedFile) => {
        if (acceptedFile.preview === files[0].preview) {
          return { ...acceptedFile, complete: true };
        }

        return acceptedFile;
      });

      // TODO: make compatible with multi file
      files[0].filename = json.filename;

      this.setState({ acceptedFiles });
      this.props.onFilesUploaded(files);
    })
    .catch((err) => {
      console.error(err);

      // remove from acceptedFiles
      // @TODO: handle multiple files
      const acceptedFiles = this.state.acceptedFiles.reduce((acc, acceptedFile) => {
        if (acceptedFile.preview === files[0].preview) {
          return acc;
        }

        return acc.concat(acceptedFile);
      }, []);

      this.setState({ acceptedFiles });
    });
  }

  removeImage(index) {
    const { acceptedFiles } = this.state;

    window.URL.revokeObjectURL(acceptedFiles[index].preview);

    acceptedFiles.splice(index, 1);
    this.setState({ acceptedFiles });
  }

  render() {
    const { acceptedFiles, rejectedFiles, errorMessage } = this.state;

    return (
      <section>
        <h4>Add up to five photos</h4>
        (you can add more photos that exist on the web already)

        <div className={styles.dropZone}>
          <Dropzone
            accept="image/jpeg, image/png"
            onDrop={this.onDrop}
            style={{ width: '100%' }}
            activeStyle={{ borderColor: 'green' }}
            rejectStyle={{ borderColor: 'red' }}
          >
            <p>Drag and drop images here or click to open file picker</p>
            <p>Only *.jpeg and *.png images will be accepted</p>
          </Dropzone>
        </div>

        <div className={styles.errors}>
          {
            rejectedFiles.map(file => (
              <div className={styles.rejectedFile}>
                {file.name} is not a vailid file type
              </div>
            ))
          }

          {errorMessage ? <div className={styles.errorMessage}>{errorMessage}</div> : null}
        </div>

        <div className={styles.images}>
          {acceptedFiles.map((file, index) => (
            <div key={`${file.preview}`} className={file.complete ? '' : styles.pending}>
              <span className={styles.removeImage} onClick={() => this.removeImage(index)}>
                <i className="icon-cross" />
              </span>
              <img alt={file.name} src={file.preview} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default ImageUpload;
