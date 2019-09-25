// all the acions are commited
import { FETCH_LOCS, NEW_LOC, EDIT_LOC } from '../actions/types';

const initialstate = {
    items: [], // represents posts from actions
    item1: {}  // new added
};
// fun evaluates what type, that we're dealing with
export default function (state = initialstate, action1) {
    switch (action1.type) { // calls to action files
      case FETCH_LOCS: {
          console.log('loreducer;fetch locations');
          return {
              ...state,
              items: action1.payload // myload
     // from loaction data within fetch
          };
         //  break;
      }
      case NEW_LOC: {
        console.log('loreducer;new');
        return {
            ...state,
            item1: action1.payload // myload
        };
        // break;
      }
      case EDIT_LOC: {
        console.log('loreducer;edit');
        return {
            ...state,
            item1: action1.payload // myload
        };
       // break;
      }
      default: return state;
    }
};