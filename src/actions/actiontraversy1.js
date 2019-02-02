import { FETCH_POSTS, NEW_POST } from './types';

export const fetchposts = () => dispatch => {
         console.log('postactionjs;fetchposts');
        fetch('/api/posts') 
        .then(res => res.json()) // map res to json
        .then(data => dispatch({
            // dispatch to postreducer
            type: FETCH_POSTS,  // type is keyword 
            payload: data }) // payload may be myposts 
        );
}
export function myfetch() {
    return function(dispatch) {
        fetch('/api/posts')
          .then(res => res.json()) // map res to json
          .then(data => dispatch({  
              type: FETCH_POSTS, 
              payload: data }))
    };
}
export const createpost = (post1) => dispatch => {
    console.log('postactionjs;createpost;post1=', post1);
    fetch('/api/add', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: { "Content-Type": "application/json" },
        // redirect: "follow", // manual, *follow, error
        // referrer: "no-referrer", // no-referrer, *client
        // body: new FormData(document.getElementById('email-signup'))
        body: JSON.stringify(post1), // body must match "Content-Type"
      })
        .then(res => res.json())
        .then((data) => {
            console.log('postactionjs;createpost;data=', data);
            dispatch({
            type: NEW_POST,
            payload: post1
        })})
        // .then(this.props.history.replace(`/api/posts`))
        // .then(setTimeout(() => { window.location.reload() }, 500))
        .catch(err => {
         console.error('postformjs;fetchpost;error:', err);
        //   this.props.history.replace(`/api/posts`);
        //    setTimeout(() => { window.location.reload() }, 500)  ;
           // window.location.reload() window.location.href
        })
      ;
}