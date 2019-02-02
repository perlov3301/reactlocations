import React from 'react';
import Notelist2 from '../components/notelist2';
import '../App.css';

export default class Indexpage extends React.Component {
   render() {
       const a11 = Object.values(this.props.notes);
       return (
           <fieldset className="styleindex">
               <legend>pages/index.js:notes</legend>
               <Notelist2 notes={a11} />
           </fieldset>
       );
   }
}
