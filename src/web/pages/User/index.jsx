/**
 * @class User
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import container from 'containers/UserContainer';
import TripItem from 'web/components/TripItem';
import ListItem from 'web/components/ListItem';

import styles from './user.scss';

const propTypes = {
  // test: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  totalPosts: PropTypes.number.isRequired,
  consecutiveMonths: PropTypes.number.isRequired,
  createdDate: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  profilePic: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export const User = ({ name, totalPosts, consecutiveMonths, createdDate, posts, profilePic, bio }) => (
  <div className={styles.wrapper}>
    <div className={styles.topBar}>
      <h2 className={styles.name}>{name}</h2>
      <ul className={styles.stats}>
        <li>{totalPosts} postes</li>
        <li>member since {createdDate}</li>
        <li>{consecutiveMonths} consecutive months</li>
      </ul>
    </div>
    <div className={styles.main}>
      <div className={styles.sideBar}>
        <div className={styles.profilePic} style={{ background: `url(${profilePic})` }} />
        <div className={styles.bio}>{bio}</div>
      </div>
      <div className={styles.posts}>
        { posts.map(post => (post.type === 'tr') ? <TripItem key={post.id} {...post} /> : <ListItem key={post.id} {...post} />) }
      </div>
    </div>
  </div>
);

User.propTypes = propTypes;

export default container(User);
