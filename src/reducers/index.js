import { combineReducers } from 'redux';

import main from './mainReducer';
import gallery from './galleryReducer';
import favorites from './favoritesReducer';

const rootReducer = combineReducers({
  main,
  gallery,
  favorites,
});

export default rootReducer;
