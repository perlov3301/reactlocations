// npm start
import React, { Component } from 'react';
import './App.css';
// import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { StyleSheet, Text, View,
  ActivityIndicator} from 'react-native';
import getos from './components/getos';
import Categories1 from './components/categories1';
import Categornative from './pages/categornative';
import Choosecatedit from './pages/choosecatedit';
import Chooselocedit from './pages/chooselocedit';
import Chooselocremove from './pages/chooselocremove';
import Editcat from './pages/editcat';
import Editpage from './pages/editreact';
import Hellonative from './components/hellonative';
// import Categornativemini from './pages/categornativemini';
import Indexpage from './pages/index';
import Navbar2 from './components/navbar2';
// import Navbar3 from './components/navbar3';
import Newcategory from './pages/newcategory';
import Newlocation from './pages/newlocation';
import Sectionlist12 from './pages/sectionlist12';
import Showpage from './pages/show';
import Removepage2 from './pages/remove2';
// import Showcategory1 from './pages/showcategory1';
import Showcategory2 from './pages/showcategory2';
// import Footer2 from './components/footer2';
import Footer3 from './components/footer3';
import DB1 from './db1';
import DB2 from './db2';

const stylesnative = StyleSheet.create({
  box: { 
    width: '80%',
    padding: '0.35em', 
    marginTop: '4.5em',
    marginBottom: '0.26em',
    backgroundColor: 'rgba(100, 116, 80, 0.7)',
    borderRadius: '0.26em' },
  text: { 
    textAlign: 'center',
    fontWeight: 'bold', 
    fontSize: '1.7rem',
    color: 'white' 
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleremove = this.handleremove.bind(this);
  }
  state =  {
    dbapp: new DB1(),
    dbcat: new DB2(),
    notes: {},
    categories: {},
    catnotes: {},
    loading: true,
    aos: ''
  }
  async componentDidMount() {
    this.state.aos = getos();
    console.log('app;did;os=', this.state.aos, 
      'process.env:', process.env);
    const notes = await this.state.dbapp.getallnotes();
    // console.log('app;did;notes.keys=', Object.keys(notes));
    console.log('app;did;notes=', notes);
    const categories = await this.state.dbcat.getcategories();
  this.setState({
    notes,
    categories,
    loading: false
});
}
 
  handlesave = async (note) => {
    let { id } = await this.state.dbapp.createnote(note);
  // let res = await this.state.dbapp.create(note);
  // let { id } = res;
    const { notes } = this.state;
    this.setState({
      notes: {
        ...notes,
        [id]: note
      }
    });
    return id;
  }
  handlesaveedit = async (note) => {
    let { id } = await this.state.dbapp.editnote(note);
    const { notes } = this.state;
    console.log('app;handglesaveedit;notes before set=', notes);
    this.setState({
      notes: {
        ...notes,
        [id]: note
      }
    });
  }
  handleremove = async (note) => {
    let lenkeys = Object.keys(this.state.notes).length;
    console.log('app;handleremove;length of keys=', lenkeys);
    console.log('app;handleremove;note._id=', note._id);
    await this.state.dbapp.removenote(note);
    /**
     
     let newnotes = this.state.notes.filter(m => 
      { 
        console.log('app;handleremove;m.key=', Object.keys(m), ';note._id=', note._id);
        return Object.keys(m) !== note._id })

var countriesFiltered = Object.keys(countries)
    .filter(function(key) { return countries[key] <= 1000000000;})
    .map(function(key) { return countries[key];});

        const prop = 'color'
const newCar = Object.keys(car)
  .reduce((object, key) => { if (key !== prop) { object[key] = car[key] }
    return object
  }, {})
  let i11 = 0;
  for (var foo in notes) {
    if (i11===0 && notes.hasOwnProperty(foo) && notes[foo] == note)
    { 
      i11 = 1;
      delete.notes[foo]; // mutable
     }
  }
     */ 
    const a = note._id;
    const b = this.state.notes;
    const renotes = Object.keys(b)
      .reduce((object, key) => {
        if (key !== a) { object[key] = b[key] } 
        return object;
      }, {});
      lenkeys = Object.keys(renotes).length;
      console.log('app;handleremove;length renotes keys=', lenkeys);
    this.setState({
      notes: renotes
    });
    console.log('app;handleremove;props=', this.props);
    // this.props.history.replace('/sectionlist');
  }
  getcatnotesap = async (c) => {
    const catnotes = await this.state.dbapp.getcatnotesdb(c);
    this.setState({
      catnotes,
      loading: false
  });
  };
  handlesavecategory = async (c) => {
    let { id } = await this.state.dbcat.createcategory(c);
    const { categories } = this.state;
    this.setState({
      categories: {
        ...categories,
        [id]: c
      }
    });
    return id;
  }
  handlesaveeditcat = async (c, array) => {
    console.log('app;handlesaveeditcat;c = ', c);
    console.log('app;handlesaveeditcat;array = ', array);
    await this.state.dbcat.editcat(c); // response of put
    const categories = await this.state.dbcat.getcategories();
    await this.state.dbapp.editarray(array);
    const notes = await this.state.dbapp.getallnotes();
    // console.log('app;did;notes.keys=', Object.keys(notes));
    console.log('app;did;notes=', notes);
    
  this.setState({
    notes,
    categories,
    loading: false
});
  }
  rendercontent() {
    if (this.state.loading) { 
      return <h2>
        <ActivityIndicator size="large" 
          color="rgb(135, 125, 100)" animating />
      </h2> }
    return (
      <div className="appcontent">
        <Route exact path="/"  component={(props) => 
            <Indexpage {...props} notes={this.state.notes}/>} />
        <Route exact path="/notes/:id" component={(props) => 
            <Showpage {...props} 
              note={this.state.notes[props.match.params.id]} />} />
        <Route exact path="/new" component={(props) => 
            <Newlocation {...props} onsave={this.handlesave}/>} />
        <Route exact path="/newcategory" component={(props) => 
            <Newcategory {...props} onsave={this.handlesavecategory} /> } />
        <Route exact path="/choosecatedit" component={(props) => 
            <Choosecatedit {...props} categories={this.state.categories} />} />
        <Route exact path="/chooselocedit" component={(props) => 
            <Chooselocedit {...props} notes={this.state.notes} />} />
        <Route exact path="/chooselocremove" component={(props) => 
            <Chooselocremove {...props} notes={this.state.notes} />} />
        <Route exact path="/locedit/:id" component={(props) => 
            <Editpage {...props} onsaveedit={this.handlesaveedit}
              noteloc={this.state.notes[props.match.params.id]}/>} />
        <Route exact path="/cateedit/:id" component={(props) => 
            <Editcat {...props} 
            cat={this.state.categories[props.match.params.id]}
            onsaveedit={this.handlesaveeditcat} />
              } /> 
        <Route exact path="/locremove/:id" component={(props) => 
            <Removepage2 {...props} onremove={this.handleremove}
              noteloc={this.state.notes[props.match.params.id]}
              dbloc={this.state.dbapp} />} />
              {/* flat with map */}
        <Route exact path="/categornative" component={(props) => 
            <Categornative {...props} categories={this.state.categories}/>} /> 
        {/* <Route exact path="/categornativemini" component={(props) => 
            <Categornativemini {...props} notes={this.state.notes}/>} /> */}
        {/* <Route exact path="/sectionlist" component={(props) => 
            <Sectionlist11 {...props} 
              notvalues={Object.values(this.state.notes)}
              catvalues={Object.values(this.state.categories)} />} /> */}
         <Route exact path="/sectionlist" component={(props) => 
            <Sectionlist12 {...props} notes={this.state.notes}
              categories1={this.state.categories} />} />
              {/* traversy */}
        <Route exact path="/categories1" component={(props) => 
            <Categories1 {...props} categories={this.state.categories} />} /> 
        {/* infinite update <Route exact path="/categories/:id" component={(props) => 
            <Showcategory1 {...props} getcatnotessh={this.getcatnotesap}
              cat={this.state.categories[props.match.params.id]} />} /> */}
        <Route exact path="/categories/:id" component={(props) => 
            <Showcategory2 {...props} 
              cat={this.state.categories[props.match.params.id]} />} />
    </div>
    );
  }
  indicator11 = () => this.state.loading ? 
    (<ActivityIndicator size="large" color="rgb(135, 125, 100)" animating />)
    : null
    ;
  render() {
    const reactvers = React.version;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            React {reactvers} on  {this.state.aos}
            <div className="navbardiv">
              <Navbar2 />
            </div>
            
            <View style={stylesnative.box}>
              <Text style={stylesnative.text}>React Native Insert</Text>
            </View>
            { this.rendercontent() }
            
            <Hellonative />
            <Footer3 />
          </div>
      </BrowserRouter>
      </Provider>
      
      
    );
  }
}
// App.propTypes = {
//   store: PropTypes.object.isRequired,
// }
export default App;
//  {/* <Editcat {...props} onsaveedit={this.handlesaveeditcat}
//               notecat={this.state.categories[props.match.params.id]}/> */}
