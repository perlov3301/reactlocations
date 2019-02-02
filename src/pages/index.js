import React from 'react';
import Notelist2 from '../components/notelist2';
import '../App.css';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import Button from '@material-ui/core/Button';

export default class Indexpage extends React.Component {
    // static contextTypes = {
    //     router: () => null, // replace with PropTypes.object if you use them
    //   }
   render() {
       const a11 = Object.values(this.props.notes);
       return (
           <fieldset className="styleindex">
               <legend>
                 {/* is not working
                 <Button variant="contained"  
                      onClick={this.context.router.history.goBack}
                      style={{backgroundColor: 'rgb(45,65, 100)',
                      borderRadius: '0.3em',
                      color: 'white',
                      padding: '0.1em 0.3em',
                      textDecoration: 'none',
                      textDecorationColor: 'blue'}} >
                    <ArrowBackIcon />back
                 </Button> &nbsp; */}
                 pages/index.js:notes 
               </legend>
               <h2>All the Locations</h2>
               <Notelist2 notes={a11} />
           </fieldset>
       );
   }
}
