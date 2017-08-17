/**
 * @class CreatePost
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Text, Textarea } from 'react-form';

import ImageUpload from './ImageUpload';

import styles from './createPost.scss';

const postTypeToName = {
  'trip-report': 'Trip Report',
  'random-track': 'Random Track',
};

const propTypes = {
  routeParams: PropTypes.object.isRequired,
  submitOverride: PropTypes.func,
};

const defaultProps = {
  submitOverride: null,
};

export class CreatePost extends React.Component {
  constructor() {
    super();

    this.state = { filesUploaded: [], loading: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFilesUploaded = this.onFilesUploaded.bind(this);
  }

  onFilesUploaded(files) {
    this.setState({ filesUploaded: this.state.filesUploaded.concat(files) });
  }

  handleSubmit(values) {
    this.setState({ loading: true });

    if (this.props.submitOverride) {
      this.props.submitOverride({ ...values, filesUploaded: this.state.filesUploaded });
    } else {
      console.log(this.state);
      console.log(values);
    }
  }

  render() {
    const { routeParams } = this.props;
    const { loading } = this.state;

    const postType = routeParams.postType ? postTypeToName[routeParams.postType] : 'Post';
    const loadingSpan = loading ? <span className={styles.loading}>Loading...</span> : null;

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
                    <Text field="title" id="title" type="text" placeholder="Format: June 23, 2007, Mt. Rainier, Camp Muir corn" />
                  </div>

                  <div className={styles.formRow}>
                    <label htmlFor="body">Body</label>
                    <Textarea
                      field="body"
                      id="body"
                      rows="10"
                    />
                  </div>

                  <button type="submit" className="button-primary" disabled={loading}>Submit</button>
                  {loadingSpan}
                </form>
              )}
            </Form>
          </section>

          <ImageUpload onFilesUploaded={this.onFilesUploaded} />
        </div>
      </div>
    );
  }
}

CreatePost.propTypes = propTypes;
CreatePost.defaultProps = defaultProps;

export default CreatePost;
