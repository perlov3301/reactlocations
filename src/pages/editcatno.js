// newcategoryjs
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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Landscape   from '@material-ui/icons/Landscape';
// import DB2 from '../db2';

 class Editcat extends React.Component {
     constructor(props) {
        super(props);
        console.log('editcat;constructor;');
        this.state = {
            // dbcat: new DB2(),
            cat: {
              title: '',
              createdat: this.props.notecat.createdat,
              updatedat: new Date()
            },
            loading: true,
        };
        this.mounted = false;
        this.handlesaveedit = this.handlesaveedit.bind(this);
        this.updatevalue = this.updatevalue.bind(this);
     }
     static contextTypes = {
        router: () => null, // replace with PropTypes.object if you use them
      }
      async componentDidMount() {
        this.mounted = true;
        console.log('editcat;did;notecat', this.props.notecat);
        // const a = this.props.notecat._id;
        // const onecat = await this.state.dbcat.getcat(a);
        // console.log('editreact;did;onenote=', onecat);
        this.mounted && this.setState({
            cat: this.props.notecat,
            loading: false
        });
      }
      componentWillUnmount() {
        this.mounted = false;
      }
    updatevalue = (e) => {
      const { cat } = this.state;
      this.setState({
        cat: { ...cat, [e.target.name]: e.target.value }
      });
    }
    handlesaveedit = async (e) => {
      e.preventDefault();
      console.log('editcat;handlesaveedit;e=', e);

      const id = await this.props.onsaveedit(this.state.cat);
      this.props.history.replace(`/categories/${ id }`);
    }
    
    render() {
        // const { note } = this.state;
         const { cat } = this.state;
        // const  catprop  = this.props.notecat;
       
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
                  pages/editcatjs</legend> 
              <h2>Edit Category</h2>
              <form onSubmit={this.handlesaveedit}>
                <div className="noteformfield"
                  style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                 <label>Name</label>
                 <input type="text" name="title"  required
                   placeholder={cat.title}
                   value={cat.title}
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

export default Editcat;