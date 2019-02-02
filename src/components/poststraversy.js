import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchposts1 } from '../actions/postactions';
import Db1 from '../db1';
import nativevibra from '../components/nativevibra';
import { withRouter } from 'react-router-dom';

 class Posts extends Component {
   constructor(props) {
     super(props);
     this.a = [];
   }
   state = {
     dbapp: new Db1(),
     notes: {},
     loading: true
   }
   // we no longer need state 
  componentWillMount () {
    // const notes = await this.dbapp.getallnotes();
    this.props.fetchposts1();
    
  }
  componentWillReceiveProps(nextprops) {
    console.log('Post.js;willreceiveprops;nextprops' +
      nextprops, Object.keys(nextprops) );
    if(nextprops.newpost) {
      console.log('Post.js;willreceiveprops;newpost' +
        nextprops.newpost, Object.keys(nextprops.newpost) );
      this.props.posts.unshift(nextprops.newpost);
      console.log('post.js;willreceiveprops;posts[0]=' +
      this.props.posts[0].id);
      nativevibra();
    }
  }
  render() {
    nativevibra();
    const postitems = this.props.posts.map(post1 => (
      <div key={post1.id}>
        <h3>{ post1.title }</h3>
        <p>{ post1.body }</p>
      </div>
    ) )
    ;
    return (
      <fieldset >
        <legend>Posts.js</legend>
        <h2>Posts</h2>
        <div >{postitems}</div>
      </fieldset>
    )
  }
}
// rootposts is from rootreducer=index.js
const mapStateToProps = state => ({
// new properties from rootindex.js<-postreducer
  posts: state.rootposts.items ,
  newpost: state.rootposts.item
});
// adding myproperties to react props
Posts.propTypes = {
  fetchposts1: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newpost: PropTypes.object
}
// export default Posts; instead: connect
// (null= map state,dispatch,mergeprops to props)
// export default connect(null, { fetchposts1 })(Posts)
// export default connect(mapStateToProps, { fetchposts1 })(Posts);
export default 
  withRouter(connect(mapStateToProps, { fetchposts1 })(Posts));