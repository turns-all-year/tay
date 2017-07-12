/**
 * @class Trip
 * @description
 */

/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';

import container from 'containers/TripContainer';
import UserSideBar from 'web/components/UserSideBar';
import ImageViewer from 'web/components/ImageViewer';
import Comment from './Comment';

import styles from './trip.scss';

const propTypes = {
  user: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.array,
  time: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
};

const defaultProps = {
  comments: [],
};

export const Trip = ({
  user: { totalPosts, consecutiveMonths, createdDate, bio, profilePic, name: userName },
  title,
  date,
  body,
  comments,
  time,
  img,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.topBar}>
      <h2 className={styles.title}>{title} - { date }</h2>
    </div>
    <main className={styles.main}>
      <UserSideBar {...{ totalPosts, consecutiveMonths, createdDate, bio, profilePic, name: userName }} />

      <section>
        <div className={styles.initialPost}>
          <h5>Original Post</h5>
          <div className={styles.date}>{date} - {time}</div>
          <p>{body}</p>

          <ImageViewer {...{ images: img, className: styles.imageViewer }} />
        </div>
        {comments.map((comment, index) => <Comment key={index} {...{ ...comment, className: styles.comment }} />)}
      </section>
    </main>
  </div>
);

Trip.propTypes = propTypes;
Trip.defaultProps = defaultProps;

export default container(Trip);
