import { FETCH_LOCS, FETCH_CA  } from './types';
import DB1 from '../db1';
import DB2 from './db2';

var dbloc = new DB1();
var dbcat = new DB2();

export const fetchlocations1 =  () => async (dispatch) => {
    console.log('loactions.js; fetching');
    const notes = await dbcat.getallnotes();
        dispatch({
            type: FETCH_LOCS,
            payload: notes
        });
};