/**
 * @class CreatePost
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Text, Textarea } from 'react-form';
import Dropzone from 'react-dropzone';

import styles from './createPost.scss';

const errorTime = 5000;

const postTypeToName = {
  'trip-report': 'Trip Report',
  'random-track': 'Random Track',
};

const propTypes = {
  routeParams: PropTypes.object.isRequired,
};

export class CreatePost extends React.Component {
  constructor() {
    super();

    this.state = { acceptedFiles: [], rejectedFiles: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.setError = this.setError.bind(this);
  }

  componentWillUnmount() {
    // important to prevent memory leaks
    this.state.acceptedFiles.forEach(file => window.URL.revokeObjectURL(file.preview));
  }

  onDrop(accepted, rejected) {
    if (this.state.acceptedFiles.length < 5) {
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

  removeImage(index) {
    const { acceptedFiles } = this.state;

    window.URL.revokeObjectURL(acceptedFiles[index].preview);

    acceptedFiles.splice(index, 1);
    this.setState({ acceptedFiles });
  }

  handleSubmit(values) {
    console.log(this.state);
    console.log(values);
  }

  render() {
    const { routeParams } = this.props;
    const { acceptedFiles, rejectedFiles, errorMessage } = this.state;

    const postType = routeParams.postType ? postTypeToName[routeParams.postType] : 'Post';

    return (
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h2 className={styles.pageHeading}>New {postType}</h2>
        </div>

        <div className={styles.main}>
          <section>
            <div className={styles.guidelines}>
              <div>
                General posting guidelines:
              </div>
              <ul>
                <li>Be civil and respectful, avoid personal attacks - that is the norm here.</li>
                <li>Alternate viewpoints are welcome: debate the viewpoint, not the person.</li>
                <li>This is a skiing forum: please keep your posts related to skiing.</li>
                <li>Report problem posts: contact turns-all-year.com or a moderator.</li>
              </ul>
              <div>
                Photo posting guidlines:
              </div>
              <ul>
                <li>Pick your best pictures from the day</li>
                <li>See stickied post in TRs for additional help</li>
              </ul>
            </div>

            <Form
              onSubmit={this.handleSubmit}
              validate={({ title, body }) => ({
                title: !title ? 'A title is required' : undefined,
                body: !body ? 'A body is required' : undefined,
              })}
            >
              {({ submitForm }) => (
                <form onSubmit={submitForm}>
                  <div className={styles.formRow}>
                    <label htmlFor="title">Title</label>
                    <Text field="title" id="title" type="text" />
                  </div>

                  <div className={styles.formRow}>
                    <label htmlFor="body">Body</label>
                    <Textarea
                      field="body"
                      id="body"
                      rows="10"
                    />
                  </div>

                  <button type="submit" className="button-primary">Submit</button>
                </form>
              )}
            </Form>
          </section>

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
                <div key={`${file.preview}`}>
                  <span className={styles.removeImage} onClick={() => this.removeImage(index)}>
                    <i className="icon-cross" />
                  </span>
                  <img alt={file.name} src={file.preview} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

CreatePost.propTypes = propTypes;

export default CreatePost;
