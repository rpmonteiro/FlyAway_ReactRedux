import { FETCH_FLICKR_IMG } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_FLICKR_IMG:
      return [action.payload, ...state];
  }
  return state;
}
