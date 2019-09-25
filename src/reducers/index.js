// rootreducer
import { combineReducers } from 'redux';
// postreducer within reactexpress`
import loreducer from './loreducer'; 
import categoryreducer from './categoryreducer';

export default combineReducers ({
// was rootposts  within reactexpress
    rootlocations: loreducer,  // that is what we send to 
// to appjs within state.rootposts
// at last we want items from loreducer
    categories: categoryreducer
   
});