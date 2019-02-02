import React from 'react';
import { Link } from 'react-router-dom';

 class Notelist2 extends React.Component {
  rendernotes() {
    const a1 = Object.values(this.props.notes);
  return  a1.map((n) => 
      <fieldset key={n._id} style={{
        backgroundColor: 'rgba(88, 110, 88, 0,26)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
        }}>
        <legend>components/notelist2js</legend>
        <div className="navbar">
          <Link to={`/notes/${n._id}`}
          style={{fontSize: '1.25em',
             fontWeight: 'bold'}}
           > {n.title}</Link>
        </div>
      </fieldset>);
    
  }
   render() {
     return (
       <div>
         { this.rendernotes() }
       </div>
     );
   }
}
export default Notelist2;