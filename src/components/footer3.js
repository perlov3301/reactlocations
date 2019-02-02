import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
// import Archive from '@material-ui/icons/Archive';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import Button from '@material-ui/core/Button';
import '../App.css';

const styles1 = theme => ({
  button: {
      backgroundColor: 'rgb(45, 65, 100)',
      color: 'white',
      alignSelf: "center",
      onMouseOver: 'style.backgroundColor = "green"'
  },
  
});

class Footer3 extends React.Component {
    render ()   {
      const { classes } = this.props;
        return (
          <nav className="navfooter navbarbackground">
              <legend> navfooter.js</legend> 
              {/* <Link to="/categornativemini" style={{textDecoration: 'none'}}>
               <Button variant="contained"  style={{backgroundColor: 'rgb(45,65, 100)',
                        borderRadius: '0.3em',
                        color: 'white',
                        padding: '0.1em 0.3em'}} >
                  <LibraryBooksIcon />Categories:minimum FlatList
                </Button>
              </Link> */}
              <Link to="/categories1" 
                 style={{textDecoration: 'none', marginTop: '0.5em'}}>
               <Button classes={{ root: classes.button }} >
                  <LibraryBooksIcon />Categories:minimum FlatList
                </Button>
              </Link>
              <Link to="/categornative" 
                 style={{textDecoration: 'none', marginTop: '0.5em'}}>
               <Button classes={{ root: classes.button }} >
                  <LibraryBooksIcon />Categories: FlatList with Map()
                </Button>
              </Link>
              <Link to="/" 
                 style={{textDecoration: 'none', marginTop: '0.5em'}}>
               <Button classes={{ root: classes.button }} >
                  <ListRoundedIcon />List of Locations
                </Button>
              </Link>
              <Link to="/sectionlist" 
                 style={{textDecoration: 'none', marginTop: '0.5em'}}>
               <Button   className={classes.button} >
                  <LibraryBooksIcon /><ListRoundedIcon />Sectionlist
                </Button>
              </Link>
              {/* <div>Date.now(): {Date.now()}</div> */}
            </nav>
        );
    }
}

Footer3.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles1)(Footer3);
// style={{backgroundColor: 'rgb(45,65, 100)',
//                         borderRadius: '0.3em',
//                         color: 'white',
//                         padding: '0.1em 0.3em'}}