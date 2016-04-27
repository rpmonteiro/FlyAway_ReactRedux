import { combineReducers } from 'redux';
import FlickrImageReducer from './flickr_image_reducer';

const rootReducer = combineReducers({
  flickrImages: FlickrImageReducer,
});

export default rootReducer;
