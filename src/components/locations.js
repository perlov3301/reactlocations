import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchlocations1 } from '../actions/loactions';

class Locations extends Component {
    state =  { loading: true  };
  
  // componentWillMount () { this.props.fetchlocations1(); }
  async componentDidMount() { 
      await this.props.fetchlocations1(); 
      this.state =  { loading: false };
    }
  componentWillReceiveProps(nextprops) {
      console.log('locations.js;willreceive keys=', Object.keys(nextprops));
      if(nextprops.newlocation) {

      }

  }
  render() {
    const loitems = this.state.locations.map(location => (
            <div key={location._id}>
              <h3>{location.title}</h3>
                <p>{location.body}</p>
            </div>
        ));
        return
  }
}

export default connect(null, { fetchlocations1 })(Locations);