import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { StyleSheet, Text, View, SectionList,
  ActivityIndicator, TouchableOpacity,
  ScrollView } from 'react-native';
import DB2 from '../db2';
import DB1 from '../db1';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

class Listitemloc extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onpress = this.onpress.bind(this);
  }
  onpress = () => {
    this.props.onpressitem(this.props._id);
  }
  render() {
    const textcolor = this.props.selected ? "red" : "black";
    console.log('chooselocremove;listitem1;render.props.id=', this.props.id);
    return (
      // className="navbar"
      <TouchableOpacity onPress={this.onpress}>
        <View>
          <Text style={{ color: textcolor }} key={this.props.myindex}>
            <Text className="navbar">
              <Link to={`/locremove/${this.props.id}`} 
                 style={{padding:'0.1em 0.7em', 
                 fontWeight: 'bold',
                 fontSize: '1.16em'}} > 
                {this.props.title}</Link>
            </Text>
            
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
class chooselocremove extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      dbcat: new DB2(),
      dbapp: new DB1(),
      categories: {},
      notes: {},
      catsections: [],
      selected: (new Map(): Map<string, boolean>),
    }
    this.sectionsnotes = this.sectionsnotes.bind(this);
    this.indicator11 = this.indicator11.bind(this);
  }
  static contextTypes = {
    router: () => null, // replace with PropTypes.object if you use them
  }
  async componentDidMount() {
    const notes = await this.state.dbapp.getallnotes();
    const categories = await this.state.dbcat.getcategories();
    const catvalues = Object.values(categories);
    const notvalues = Object.values(notes);
    let searray = [
      // {title: 'section11', data: ['a11', 'b11', 'c11']},
      // {title: 'section12', data: ['a12', 'b12', 'c12']}
    ];
    console.log('chooselocremove;did;catvalues=', catvalues);
    catvalues.forEach((c) => {
      const titlehere = c.title;
      let notesarray = [];
      notvalues.forEach((n) => {
        if (c.title === n.category) {
          notesarray = [...notesarray, n]; // for obj as item
        }
      });
      let obj = {title: titlehere, data: notesarray};
      searray.push(obj);
    });
    
    this.setState({
      categories,
      catsections: searray
    });
}
  
  indicator11 = () => this.state.loading ? 
    (<ActivityIndicator size="large" color="#f000ff" animating />)
    : null
    ;
  sectionsnotes() {
    const a = Object.values(this.state.categories);
    // const b = Object.values(this.state.notes);
    // const b = a.map((c) => c.title);
    let searray = [
      // {title: 'section11', data: ['a11', 'b11', 'c11']},
      // {title: 'section12', data: ['a12', 'b12', 'c']}
    ];
    a.forEach((c) => {
      const titlehere = c.title;
      console.log('chooselocremove;title=', titlehere);
      const arr = c.map((n) => n.title);
      const obj = {title: c.title, data: arr};
      searray.push(obj);
      // console.log('pages/sectionlist;sectionsnotes; newobj=', obj);
    });
    return searray;
  }
  _onpressitem = (id) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    })
  };
  _renderitem = ({item, index}) => (
    <Listitemloc
      myindex={index}
      id={item._id}
      onpressitem={this._onpressitem}
      selected={!!this.state.selected.get(item._id)}
      title={item.title}
  />
  );
  renderme1 = (text1) => (<Text>{text1}</Text>);
  render() {
    return (
      <fieldset style={{display: 'flex'}}>
        <legend>
        <Button variant="contained"  
            onClick={this.context.router.history.goBack}
            style={{backgroundColor: 'rgb(45,65, 100)',
            borderRadius: '0.3em',
            color: 'white',
            padding: '0.1em 0.3em',
            textDecorationLine: 'none'}} >
          <ArrowBackIcon />back
        </Button> &nbsp;
            pages/chooselocremovejs</legend>
        <View style={styles.box}>
          <Text style={styles.textunder}>Choose a Location for removing
          </Text>
          {/** renderItem={({item}) => this._renderitem({item, index})} 
            before: <Text key={index}>{item}</Text>
          */}
            <View style={{flex:1}}>
              <ScrollView >
                  <SectionList
                      style={{height: '100em'}}
                      renderItem={({item, index, section}) => 
                        this._renderitem({item, index})
                      }
                      renderSectionHeader={({section: {title}}) => (
                        <Text style={{
                            marginBottom: '0.5em',
                            fontWeight: 'bold', 
                            textDecorationLine: 'underline',
                            color: 'rgb(199, 213, 237)'}}>
                          {title}
                        </Text>
                      )}
                      sections={this.state.catsections}
                      keyExtractor={(item, index) => item + index}
                    />
              </ScrollView>
            </View>
        </View> 
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
  text: { fontWeight: 'bold', color: '#ffffff' },
  textunder: { 
     fontSize: '1.16em',
     fontWeight: 'bold',
     color: '#ffffff',
     textDecorationLine: "underline",
     marginBottom: '0.5em' }
});
export default chooselocremove;

/**
 stackoverflow react native
constructor(props){
   super(props);
   this.onMenuPress = this.onMenuPress.bind(this);
}
onMenuPress(item){
   console.log(item);
   this.props.navigation.navigate("some_route");
}

render() {
.....some code
    <ListItem onPress={(item) => this.onMenuPress(item)}>
....more code
}
catlist
notvalues.map((n) =>
<Link style={{padding: '0.3em 0.8em 0.3em 0.8em '}}
            to={`/notes/${n._id}`} > {n.title}
  );
  /locremove/${this.props.id}
 */