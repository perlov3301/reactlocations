import React, { Component } from 'react';
import DB2 from '../db2';
import '../App.css';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

 class Categories10 extends Component {

    static contextTypes = {
      router: () => null, // replace with PropTypes.object if you use them
    }

  render() {
    const a = Object.values(this.props.categories);
    const postitems = a.map((n) => 
      <fieldset key={n._id}>
        <legend>Object.values(this.state.categories).map</legend>
        <h3 className="navbar">
          <Link to={`/categories/${n._id}`} > {n.title}</Link>
        </h3>
      </fieldset>);
    return (
      <fieldset>
        <legend>
        <Button variant="contained"  
            onClick={this.context.router.history.goBack}
            style={{backgroundColor: 'rgb(45,65, 100)',
            borderRadius: '0.3em',
            color: 'white',
            padding: '0.1em 0.3em',
            textDecoration: 'none',
            textDecorationColor: 'blue'}} >
          <ArrowBackIcon />back
        </Button>
          components/categories1js;min FlatList with Traversy</legend>
        {postitems}
      </fieldset>
    )
  }
}
export default Categories10;
