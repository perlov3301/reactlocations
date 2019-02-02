import React from 'react';
import {  Link } from 'react-router-dom';
import '../index.css';
import Button from '@material-ui/core/Button';
import Landscape   from '@material-ui/icons/Landscape';
import DB2 from '../db2';

class Newlocation extends React.Component {
  constructor(props) {
      super(props);
      this.mounted = false;
      this.state = {
        note: {
          title: '',
          body: '',
          alat: '',
          alng: '',
          category: undefined,
          createdat: undefined,
          updatedat: undefined,
          _id: ''
        },
        dbcateg: new DB2(),
        categories: {},
        loading: true
      }
    this.updatevalue = this.updatevalue.bind(this);
    this.handlesave = this.handlesave.bind(this);
  }
 
  async componentDidMount () {
    this.mounted = true;
    const a = await this.state.dbcateg.getcategories();
    this.mounted && this.setState({
        categories: a,
        loading: false
    });
  } // didmount
  componentWillUnmount() {
    this.mounted = false;
  }
    updatevaluetitle = (e) => {
      const { note } = this.state;
      // const id1 = e.target.value + Date.now();
      this.setState({
        ...note,
        [e.target.name]: e.target.value,
        _id: e.target.value 
      });
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
      this.props.history.replace(`/notes/${ id }`);
    }
    render() {
        const { note } = this.state;
        const a = Object.values(this.state.categories);
        a.sort(function (aaa, bbb) {
          let textA = aaa.title.toUpperCase();
          let textB = bbb.title.toUpperCase();
          return textA.localeCompare(textB);
        });
        // const postitems = a.map((n) => n.title);
        const optioni = a.map(c =>
          <option key={c._id} value={c.title}>{c.title}</option>
        );
        return (
            <fieldset className="noteform">
              <legend>newlocationjs</legend> 
              <h2>Add Location</h2>
              <form onSubmit={this.handlesave}>
                <div className="noteformfield"
                  style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                 <label>Name</label>
                 <input type="text" name="title"  required
                   placeholder="Name"
                   value={note.title}
                   style={{fontWeight: 'bold', fontSize: '1.1em'}}
                   onChange={this.updatevalue} />
                </div>
                <div className="noteformfield noteformfieldtext"
                  style={{display: 'flex',flexDirection: 'row'}} >
                  <label>Address</label>
                  <textarea name="body" required
                    placeholder="Address"
                    value={note.body} 
                    style={{fontWeight: 'bold', fontSize: '1.1em'}}
                    onChange={this.updatevalue} />
                </div>
                <div className="noteformfield" 
                  style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                 <label>Latitude</label>
                 <input type="number" name="alat" step='any' required
                   placeholder="Latitude"
                   value={note.alat}
                   style={{fontWeight: 'bold', fontSize: '1.1em'}}
                   onChange={this.updatevalue} />
                </div>
                <div className="noteformfield" 
                  style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                 <label>Longitude</label>
                 <input type="number" name="alng" step='any' required
                   placeholder="Longitude"
                   value={note.alng}
                   style={{fontWeight: 'bold', fontSize: '1.1rem'}}
                   onChange={this.updatevalue} />
                </div>
                <div className="noteformfield"
                  style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                  <label>Category</label>
                  <select required id="idcategory" name="category" 
                    value={note.category}
                    onChange={this.updatevalue} >
                     <option value="" >choose an option</option>
                    {optioni}
                  </select >
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
export default Newlocation;

/**
  <option value="" >choose an option</option>
  <option value="tel aviv" >Tel Aviv</option>
  <option value="shopping" >shopping</option>
  <option value="shaping" >shaping</option>
  <option value="rishon leZion">Rishon leZion</option>
 */