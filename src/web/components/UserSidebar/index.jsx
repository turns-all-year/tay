/**
 * @class UserSideBar
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './userSidebar.scss';

const propTypes = {
  totalPosts: PropTypes.number.isRequired,
  createdDate: PropTypes.string.isRequired,
  consecutiveMonths: PropTypes.number.isRequired,
  profilePic: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  name: PropTypes.string,
};

const defaultProps = {
  name: undefined,
};

export const UserSideBar = ({ totalPosts, createdDate, consecutiveMonths, profilePic, bio, name }) => (
  <section>
    {name ? <h5 className={styles.name}>{name}</h5> : null}

    <div className={styles.profilePic} style={{ background: `url(/images/${profilePic}) center` }} />
    <ul className={styles.stats}>
      <li><i className="icon-new-message" /> <span>{totalPosts} posts</span></li>
      <li><i className="icon-user" /> <span>member since {createdDate}</span></li>
      <li><i className="icon-calendar" /> <span>{consecutiveMonths} consecutive months</span></li>
    </ul>
    <div className={styles.bio}>{bio}</div>
  </section>
);

UserSideBar.propTypes = propTypes;
UserSideBar.defaultProps = defaultProps;

export default UserSideBar;
