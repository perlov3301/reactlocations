import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const MyButton = (props) => {

    return <span>
        <Button  {...props} />   
    </span>
};

export default MyButton;