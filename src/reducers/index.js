import { reducer as reduxAsyncConnect } from 'redux-connect';

import global from './globalReducer';
import home from './homeReducer';
import user from './userReducer';
import users from './usersReducer';
import trips from './tripsReducer';
import trip from './tripReducer';

export default {
  global,
  home,
  user,
  users,
  trips,
  trip,
  reduxAsyncConnect,
};
