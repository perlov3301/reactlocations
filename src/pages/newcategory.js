import React from 'react';
import {  Link } from 'react-router-dom';
import '../App.css';
import Button from '@material-ui/core/Button';
import Landscape   from '@material-ui/icons/Landscape';

 class Newcategory extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            note: {
              title: '',
              createdat: undefined,
              updatedat: undefined
            }
        }
        this.handlesave = this.handlesave.bind(this);
        this.updatevalue = this.updatevalue.bind(this);
     }
    updatevalue = (e) => {
      const { note } = this.state;
      this.setState({
        note: { ...note, [e.target.name]: e.target.value }
      });
    }
    handlesave = async (e) => {
      e.preventDefault();
      const id = await this.props.onsave(this.state.note);
      this.props.history.replace(`/categories/${ id }`);
    }
    render() {
        // const { note } = this.state;
       
        return (
            <fieldset className="noteform">
              <legend>pages/newcategoryjs</legend> 
              <h2>New Category</h2>
              <form onSubmit={this.handlesave}>
                <div className="noteformfield"
                  style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                 <label>Name</label>
                 <input type="text" name="title"  required
                   placeholder="Name"
                   value={this.state.note.title}
                   style={{fontWeight: 'bold', fontSize: '1.1em'}}
                   onChange={this.updatevalue} />
                </div>
                <div className="noteformbuttons">
                  <button className="btn">Save</button>
                  <Link to="/" >
                    <Button variant="contained"  
                       style={{backgroundColor: 'rgb(125, 62, 90)',
                        borderRadius: '0.3em',
                        color: 'white',
                        padding: '0.1em 0.3em',
                        textDecoration: 'none'}} >
                      <Landscape />
                      Cansel
                    </Button>
                  </Link>
                  
                </div>
              </form>
            </fieldset>
        );

    }
}

export default Newcategory;