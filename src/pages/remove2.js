// to update the internal state as the result of a change in props
// lifecycle componentWillReceiveProps was the only way  to update state
// in response to a change in props without an additional render. 
// Since 16.3, a replacement lifecycle getDerivedStateFromProps, 
// solves the same case in a safer way.
// getDerivedStateFromProps is invoked after a component is instatiated
// as well as before it is re-rendered.It can return an object to update
// state, or null to indicate that the new props do not require any state
// udates.
// When an instance is being created and inserted into the DOM:
// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()
// When props is changed:These methods are called:
// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

import React from 'react';
import {  Link } from 'react-router-dom';
import '../App.css';
// import DB1 from '../db1';
// import DB2 from '../db2';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Landscape   from '@material-ui/icons/Landscape';

class Removepage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      dbchanges: {},
      note:  '',
      after: false,
      titletoremove: ''
      //  , dbcateg: new DB2(),
      //   categories: {},
      //   loading: true
    }
    localStorage.setItem('afterremove', '0');
    this.handleremove = this.handleremove.bind(this);
    this.gracerfulunmount = this.gracerfulunmount.bind(this);
  }
  static contextTypes = {
    router: () => null, // replace with PropTypes.object if you use them
  }
  gracerfulunmount(){
    this.setState({mounted: false});
    window.removeEventListener('beforeunload', 
      this.gracerfulunmount);
    console.log('remove2;graceful;before history.replace');
    this.props.history.replace('/sectionlist');
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('remove2;getderivedstate;props', props);
    if (props.noteloc !== undefined) { 
      console.log('remove2;derived;props.noteloc=', props.noteloc);
      localStorage.setItem('derivednull', 'false');
      return props;
    }else { 
      localStorage.setItem('derivednull', 'true');
      return null; }
  } 

 
    async componentDidMount() {
      window.addEventListener('beforeunload', this.gracerfulunmount);
      
      }
    
    componentWillUnmount() {
      this.setState({ mounted : false });
      this.gracerfulunmount();
      // avoid here 
   
    }
    equals(a, b) {
    if  (a.noteloc === b.noteloc) { return true; }
    else { return false; }
    }
  //   shouldComponentUpdate(nextProps, nextState){
  //  // equals() is your implementation
  //     return !equals(nextProps, this.props); 
  //  }
    shouldComponentUpdate(nextProps, nextState) {
      // render() will not be invoked if it returns false.
      // if (this.state.note === '') {return true; }
      let a = false;
       if (nextProps.noteloc.title !== this.props.noteloc.title){ a = true; }
       else { this.props.history.replace('/sectionlist'); }
      return a;
    }
    componentDidUpdate() {
      if(this.state.after) {
        // this.state.dbchanges.cansel();
        this.props.history.replace('/sectionlist');
      } else {
        this.setState({
          after: true
        });
      }
    }
    handleremove = async (e) => {      
      e.preventDefault();
      let a = localStorage.getItem('afterremove');
      console.log('remove2;handle;afterremove=', a);
      if (a === '0') {
        const anote = this.props.noteloc;
        console.log('remove2;handleremove;note', anote)
        const yes = await this.props.onremove(anote);
        console.log('remove2;handleremove;yes=', yes);
        localStorage.setItem('afterremove', '1');
        await this.setState({ after: true });
        this.props.history.replace('/sectionlist');
      } else {
        this.props.history.replace('/sectionlist');
      }
    
    }
    render() {
      // const anote = this.state.note;
      let a = localStorage.getItem('derivednull');
      if (a === 'true') { 
        this.props.history.replace('/sectionlist'); 
        return (  <h2>Location was removed</h2> );
      }
      else {
        const anote = this.props.noteloc;
        console.log('remove2;render;anote=', anote);
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
              pages/remove2js/Removepage2</legend> 
            <h2>Remove Location</h2>
            <form onSubmit={this.handleremove}>
              <div className="noteformfield"
                  style={{display: 'flex',flexDirection: 'row', 
                  alignItems: 'center'}}>
                <label>Name</label>
                <input type="text" name="title"  
                readOnly={true}
                placeholder={anote.title}
                value={anote.title}
                style={{fontWeight: 'bold', fontSize: '1.1em'}}
                />
              </div>
              <div className="noteformfield noteformfieldtext"
                style={{display: 'flex',flexDirection: 'row'}} >
                <label>Address</label>
                <textarea name="body" 
                  readOnly={true}
                  placeholder={anote.body}
                  value={anote.body} 
                  style={{fontWeight: 'bold', fontSize: '1.1em'}}
                  />
              </div>
              <div className="noteformfield" 
                style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
               <label>Latitude</label>
               <input type="number" name="alat" step='any' 
                 readOnly={true}
                 placeholder={anote.alat}
                 value={anote.alat}
                 style={{fontWeight: 'bold', fontSize: '1.1em'}}
                 />
              </div>
              <div className="noteformfield" 
                style={{display: 'flex',flexDirection: 'row', 
                alignItems: 'center'}}>
               <label>Longitude</label>
               <input type="number" name="alng" step='any'
                 readOnly={true} 
                 placeholder={anote.alng}
                 value={anote.alng}
                 style={{fontWeight: 'bold', fontSize: '1.1rem'}}
                 />
              </div>
              <div className="noteformfield"
                style={{display: 'flex',flexDirection: 'row', 
                alignItems: 'center'}}>
                <label>Category</label>
              
                <select id="idcategory" name="category" >
                   <option value="" >{anote.category}</option>
                </select >
              </div>
              <div className="noteformbuttons">
                <button className="btn">Remove</button>
                <Link to="/sectionlist" >
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
      );// return
      }
      
    }
}

export default Removepage2;
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
      <select id="idcategory" name="category" 
                    value={note.category} >
         <option value="" >choose an option</option>
      </select > 
 */