// like ./index.js
// from pages/showcategory2
import React from 'react';
import Catlistedit from '../components/catlistedit';
import '../App.css';
import { StyleSheet,  Text, View } from 'react-native';
// import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import {  Link } from 'react-router-dom';
import Landscape   from '@material-ui/icons/Landscape';
import DB1 from '../db1';

class Editcat extends React.Component {
  constructor(props) {
    super(props);
    console.log('editcat;constructor;props=', this.props);
    this.mounted = false;
    this.state =  {
      note: {
        _id: '',
        _rev: '',
        title: '',
        createdat: this.props.cat.createdat,
        uddatedat: new Date()
      },
      db1: new DB1(),
      catnotes: {},
      loading: true
    }
    this.handlesave = this.handlesave.bind(this);
    this.updatevalue = this.updatevalue.bind(this);
  }
  static contextTypes = {
    router: () => null, // replace with PropTypes.object if you use them
  }
  async componentDidMount() {
    this.mounted = true;
    // let catlist = await this.state.db1.getcatnotesdb(this.props.cat);
    const catlist = await this.state.db1.getcategory(this.props.cat);
    console.log('editcat;did;catlist=', catlist);
    this.mounted && this.setState({
      catnotes: catlist,
      note: this.props.cat,
      loading: false
    });
  }
  updatevalue = (e) => {
   // console.log('editcat;update;e.target=', e.target);
    const { note } = this.state;
    this.setState({
      note: { ...note, [e.target.name]: e.target.value }
    });
  }
  handlesave = async (e) => {
    e.preventDefault();
   // console.log('editcat;handlesave;e=', e);
    const notesarray = Object.values(this.state.catnotes);
    console.log('editcat;handlesave;before notesarray=', notesarray);
    notesarray.forEach(n => {
      n.category =  this.state.note.title;
    });
    console.log('editcat;handlesave;thisstatenote=', this.state.note);
    console.log('editcat;handlesave;after notesarray=', notesarray);
    await this.props.onsaveedit(this.state.note, 
        notesarray);
    this.props.history.replace(`/sectionlist`);
  }
   render() {
       // const a11 = Object.values(this.state.catnotes);
       let n = this.state.note;
       console.log('editcat;render;n=', n);
       return (
           <fieldset >
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
                pages/editcatjs
              </legend> 
              <h2>Edit Category with Reactjs</h2>
              <View style={styles.box}>
                <Text style={styles.text}>
                  and here is a Insert of Native
                </Text>
              </View>
                 <h2><span style={{fontSize: '0.7em'}}>category:</span>
                   {this.props.cat.title}</h2>
                 <form onSubmit={this.handlesave}>
                <div className="noteformfield"
                  style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                 <label>Edit</label>
                 <input type="text" name="title"  required
                   autoFocus={true}
                   placeholder={this.props.cat.title}
                   value={this.state.note.title}
                   style={{fontWeight: 'bold', fontSize: '1.1em'}}
                   onChange={this.updatevalue} />
                </div>
                <div className="noteformbuttons">
                  <button className="btn">Save</button>
                  <Link to="/sectionlist" >
                    <Button variant="contained"  
                       style={{backgroundColor: 'rgb(125, 62, 90)',
                        borderRadius: '0.3em',
                        color: 'white',
                        padding: '0.1em 0.3em',
                        textDecoration: 'none'}} >
                      <Landscape />Cansel
                    </Button>
                  </Link>
                  
                </div>
              </form>
               <Catlistedit notes={this.state.catnotes} />
               
           </fieldset>
       );
   }
}
const styles = StyleSheet.create({
  box: { 
      borderRadius: '0.3em',
      padding: 10,
      backgroundColor: 'rgba(125, 125, 100, 0.88)'
      },
  text: { fontWeight: 'bold', color: '#ffffff', textAlign: 'center' },
  textunder: { fontWeight: 'bold', color: '#ffffff', 
  textDecorationLine: "underline" }
});
export default Editcat;
