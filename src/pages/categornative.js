import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchlocations1 } from '../actions/loactions';

import { StyleSheet,  Text, View, 
    FlatList,  TouchableOpacity,
    ActivityIndicator } from 'react-native';
// import { any } from '../../node_modules/react-native/flow/Map';
// import { any } from 'prop-types';
// import DB2 from '../db2';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

class Listitem1 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onpress = this.onpress.bind(this);
  }
  onpress = () => {
    // I don't now why this works
    //  this.props.onpressitem(this.props._id);
    this.props.onpressitem(this.props.id);
  }
  render() {
    const textcolor = this.props.selected ? "red" : "black";
    console.log('categornative;listitem1;render,props=', this.props);
    return (
      <TouchableOpacity onPress={this.onpress}>
        <View>
          <Text style={{ color: textcolor }}>
            <h3 className="navbar">
              <Link to={`/categories/${this.props.id}`} 
                  style={{padding:'0.5em'}} > 
                {this.props.title}</Link>
            </h3>
            
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class Categornative extends React.Component {
  constructor(props) {
    super(props);
    this.renderme1 = this.renderme1.bind(this);
    this._renderitem = this._renderitem.bind(this);
  }
  
  state =  {
    selected: (new Map(): Map<string, boolean>),
    // dbcateg: new DB2(),
    // categories: {}
  };
  static contextTypes = {
    router: () => null, // replace with PropTypes.object if you use them
  }
  async componentDidMount () {
    // a is for setstate for categories
    // const a = await this.state.dbcateg.getcategories();
    // this.setState({
    //     categories: a,
    //     loading: false
    // });
  } // didmount
  _keyextractor = (item, index) => item._id;
  _onpressitem = (id) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    })
  };
  _renderitem = ({item}) => (
    <Listitem1
      id={item._id}
      onpressitem={this._onpressitem}
      selected={!!this.state.selected.get(item._id)}
      title={item.title}
  />
  );
  indicator11 = () => this.state.loading ? 
    (<ActivityIndicator size="large" color="#0000ff" animating />)
    : null
    ;
  renderme1 = (text1) => (<Text>{text1}</Text>);
  renderme2 = (
    <Link to="/" >
      <Button variant="contained"  style={{backgroundColor: 'rgb(45,65, 100)',
              borderRadius: '0.3em',
              color: 'white',
              padding: '0.1em 0.3em',
              textDecoration: 'none',
              textDecorationColor: 'blue'}} >
        <ArrowBackIcon />back
      </Button>
   </Link>
  );
 
  render() {
    const a = Object.values(this.props.categories);
    console.log('categornative;render;a=', a);
    // instead of data={this.state.adata}
    return (
      <fieldset>
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
          </Button> &nbsp;pages/categornativejs </legend>
        <View style={styles.box}>
          <Text style={styles.text}>if you need section support, use 'SectionList'</Text>
          <Text style={styles.textunder}>React Native: FlatList with Map()</Text>
          <FlatList 
            data={a}
            extraData={this.state}
            keyExtractor={this._keyextractor}
            renderItem={({item}) => this._renderitem({item})}
            ListFooterComponent={this.indicator11}
          
          />
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
  textunder: { fontWeight: 'bold', color: '#ffffff', 
  textDecorationLine: "underline" }
});
export default Categornative;
   // adata: [{key: 'tel aviv'}, {key: 'rishon'}, {key: 'ramat gan'}],
    // adata: [
    //   {key: 'tel aviv', id: 'id1', title: 'tel aviv'}, 
    //   {key: 'rishon', id: 'id2', title: 'rishon'}, 
    //   {key: 'ramat gan', id: 'id3', title: 'ramat gan'}],
    // adata: [
    //     { _id: 'id1', title: 'tel aviv'}, 
    //     { _id: 'id2', title: 'rishon'}, 
    //     { _id: 'id3', title: 'ramat gan'}],