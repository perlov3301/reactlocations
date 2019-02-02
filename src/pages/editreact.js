import React from 'react';
import {  Link } from 'react-router-dom';
import '../App.css';
import DB1 from '../db1';
import DB2 from '../db2';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Landscape   from '@material-ui/icons/Landscape';

class Editpage extends React.Component {
  constructor(props) {
    super(props);
    console.log('editreact;editpage;constructor');
    this.mounted = false;
    this.handlesaveedit = this.handlesaveedit.bind(this);
    this.state = {
      dbloc: new DB1(),
      note:  {
        _id: '',
        title: '',
        body: '',
        alat: '',
        alng: '',
        category: '',
        createdat: this.props.noteloc.createdat,
        updatedat: new Date(),
   },
      dbcateg: new DB2(),
      categories: {},
      loading: true
  }
  }
  static contextTypes = {
    router: () => null, // replace with PropTypes.object if you use them
  }
    async componentDidMount() {
      this.mounted = true;
      console.log('editreact;did;this.props.noteloc', 
        this.props.noteloc);
      let onenote = this.props.noteloc;
      // const a = this.props.noteloc._id;
      // const onenote = await this.state.dbloc.getnote(a);
      // console.log('editreact;did;onenote=', onenote);
      const b = await this.state.dbcateg.getcategories();
      this.mounted && this.setState({
          categories: b,
          note: onenote,
          loading: false
      });
    }
    componentWillUnmount() {
      this.mounted = false;
    }
    updatevalue = (e) => {
      const { note } = this.state;
      this.setState({
        note: { ...note, [e.target.name]: e.target.value }
      });
    }
    handlesaveedit = async (e) => {
      let a = this.state.note;
      console.log('editreact;handlesave')
      e.preventDefault();
      console.log('editreactjs;handlesave;note', this.state.note)
      await this.props.onsaveedit(this.state.note);
      this.props.history.replace(`/notes/${ a._id }`);
    }
    render() {
        const { note } = this.state;
        const  loc  = this.props.noteloc;
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
                </Button> &nbsp;
                pages/editreactjs/Editpage</legend> 
              <h2>Edit Location</h2>
              <form onSubmit={this.handlesaveedit}>
                <div className="noteformfield"
                  style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                 <label>Name</label>
                 <input type="text" name="title"  required
                   placeholder={loc.title}
                   value={note.title}
                   style={{fontWeight: 'bold', fontSize: '1.1em'}}
                   onChange={this.updatevalue} />
                </div>
                <div className="noteformfield noteformfieldtext"
                  style={{display: 'flex',flexDirection: 'row'}} >
                  <label>Address</label>
                  <textarea name="body" required
                    placeholder={loc.body}
                    value={note.body} 
                    style={{fontWeight: 'bold', fontSize: '1.1em'}}
                    onChange={this.updatevalue} />
                </div>
                <div className="noteformfield" 
                  style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                 <label>Latitude</label>
                 <input type="number" name="alat" step='any' required
                   placeholder={loc.alat}
                   value={note.alat}
                   style={{fontWeight: 'bold', fontSize: '1.1em'}}
                   onChange={this.updatevalue} />
                </div>
                <div className="noteformfield" 
                  style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                 <label>Longitude</label>
                 <input type="number" name="alng" step='any' required
                   placeholder={loc.alng}
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

export default Editpage;
/**
  {
        _id: this.props.noteloc._id,
        title: this.props.noteloc.title,
        body: this.props.noteloc.body,
        alat: this.props.noteloc.alat,
        alng: this.props.noteloc.alng,
        category: this.props.noteloc.category,
        createdat: this.props.noteloc.createdat,
        updatedat: new Date(),
   }  
 */