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
    </div>
    <main className={styles.main}>
      <section className={styles.sideBar}>
        <div className={styles.profilePic} style={{ background: `url(/images/${profilePic}) center` }} />
        <ul className={styles.stats}>
          <li><i className="icon-new-message" /> <span>{totalPosts} posts</span></li>
          <li><i className="icon-user" /> <span>member since {createdDate}</span></li>
          <li><i className="icon-calendar" /> <span>{consecutiveMonths} consecutive months</span></li>
        </ul>
        <div className={styles.bio}>{bio}</div>
      </section>
      <section className={styles.posts}>
        { posts.map(post => (post.type === 'tr') ? <TripItem key={post.id} {...post} /> : <ListItem key={post.id} {...post} />) }
      </section>
    </main>
  </div>
);

User.propTypes = propTypes;

export default container(User);
