import { FETCH_FLICKR_IMG } from './types';

import axios from 'axios';
const API_KEY = 'b6b35718f3c50d1c2c6d04ead7f016b2';
const ROOT_URL = ` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&privacy_filter=1&safe_search=1&group_id=41425956%40N00&per_page=30&page=1&format=json&nojsoncallback=1`;

export function fetchFlickrImages(location) {
  const url = `${ROOT_URL}&tags=${location}`;
  const request = axios.get(url);

  return {
    type: FETCH_FLICKR_IMG,
    payload: request,
  };
}
