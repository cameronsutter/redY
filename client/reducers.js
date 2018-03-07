/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';
import account from './modules/Account/AccountReducer';
import photos from './modules/Album/AlbumReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  intl,
  account,
  photos,
});
