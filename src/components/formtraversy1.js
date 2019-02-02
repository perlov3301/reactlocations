import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createpost  } from '../actions/postactions';

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
     };
     this.onchange = this.onchange.bind(this);
     this.onsubmit = this.onsubmit.bind(this);
  }
  onchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onsubmit (e) {
    e.preventDefault();
    const post1  = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createpost(post1);
    // call createpost within postaction instead;
    // fetch('https://jsonplaceholder.typicode.com/posts',
    //   {
    //     method: 'POST',
    //     headers: { 'content-type': 'application/json' },
    //     body: JSON.stringify(post1)
    //   })
    //   .then(res => res.json())
    //   .then(data1 => console.log(data1))
    //   ;
    this.setState({
      
    });
  }
  render() {
    return (
      <fieldset>
        <legend>Postform.js</legend>
        <h2>Add Post</h2>
        <form onSubmit={this.onsubmit}>
          <div>
            <label>title</label><br/>
            <input type="text" name="title" 
              value={this.state.title}
              onChange={this.onchange}/>
          </div>
          <div>
            <label>body</label><br/>
            <textarea name="body"
              value={this.state.body}
              onChange={this.onchange}/>
          </div><br/>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    )
  }
}
Postform.propTypes = {
  createpost: PropTypes.func.isRequired
}
// export default connect(null, { createpost })(Postform);
export default
  withRouter(connect(null, { createpost })(Postform));
