import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { mystyles } from './mystyles';

export default class Myplace  extends Component {
    static proptypes = {
      text: PropTypes.string
    };
    static defaultProps = {};
    shouldPureComponentUpdate = shouldPureComponentUpdate;
    // constructor(props) {
    //   super(props);
    // }
    render() {
      return (
        <div style={mystyles}>
        {this.props.text}
        </div>
      );
    }
}