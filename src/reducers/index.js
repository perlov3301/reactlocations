// rootreducer
import { combineReducers } from 'redux';
import loreducer from './loreducer';// postreducerreactexpress`
import categoryreducer from './categoryreducer';

export default combineReducers ({
    // was rootposts and postsreducerreactexpress
    rootlocations: loreducer, 
    categories: categoryreducer
    // that is what we send to 
});