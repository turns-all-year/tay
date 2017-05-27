import { reducer as reduxAsyncConnect } from 'redux-connect';

import global from './globalReducer';
import home from './homeReducer';
import user from './userReducer';
import users from './usersReducer';
import trips from './tripsReducer';

export default {
  global,
  home,
  user,
  users,
  trips,
  reduxAsyncConnect,
};
