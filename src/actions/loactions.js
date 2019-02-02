import { FETCH_LOCS, NEW_LOC, EDIT_LOC } from './types';
import DB1 from '../db1';

var dbact = new DB1();

export function fetchlocations ()  {
    return async function(dispatch) {
        const notes = await dbact.getallnotes();
        dispatch({
            type: FETCH_LOCS,
            payload: notes
        });
    };
};
// Es6 syntax
export const fetchlocations1 =  () => async (dispatch) => {
    console.log('loactions.js; fetching');
    const notes = await dbact.getallnotes();
        dispatch({
            type: FETCH_LOCS,
            payload: notes
        });
};
export const addlocation = (note1) => async (dispatch) => {
    let { id } = await this.state.dbapp.createnote(note1);
    dispatch({
        type: NEW_LOC,
        payload: id
    });
}
export const editlocation = () => (dispatch) => {
    const notes = dbact.getallnotes();
    dispatch({
        type: EDIT_LOC,
        payload: notes
    });
}