import React from 'react';
import { Link } from 'react-router-dom';

 class Catlistedit extends React.Component {
   constructor(props) {
     super(props);
     this.rendernotes = this.rendernotes.bind(this);
   }
  rendernotes() {
    const a1 = Object.values(this.props.notes);
  return  a1.map((n) => 
      <fieldset key={n._id}>
        <legend>components/catlisteditjs</legend>
        <h4 className="navbar">
          <Link style={{padding: '0.3em 0.8em 0.3em 0.8em '}}
            to={`/notes/${n._id}`} > {n.title}
          </Link>
        </h4>
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
export default Catlistedit;