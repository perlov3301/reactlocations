import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialstate = {
    items: [],
    item1: {}
};
export default function(state = initialstate, action) {
  switch(action.type) {
      // case: FETCH_POSTS...
      case FETCH_POSTS: 
        console.log('postreducerjs;case fetchposts');
        return {
            ...state,
            items: action.payload // may be action.mypost
            // from postactionjs data within fetch
        }
      case NEW_POST: 
        return {
            ...state,
            item1: action.payload
        }
      default: return state;
  }
};