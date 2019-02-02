import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchlocations1 } from '../actions/loactions';
import { StyleSheet, Text, View, FlatList, 
  ActivityIndicator } from 'react-native';
import { any } from 'prop-types';
import DB2 from '../db2';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

class Categornativemini extends React.Component {
  state =  {
    dbapp: new DB2(),
    adata: [{key: 'tel aviv'}, {key: 'rishon'}, {key: 'ramat gan'}],
    // loading: true
  }
  
  indicator11 = () => this.state.loading ? 
   (<ActivityIndicator size="large" color="#f000ff" animating />)
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
    return (
      <fieldset>
        <legend>Categornative.js</legend>
        <View style={styles.box}>
          <Text style={styles.text}>if you need section support, use 'SectionList'</Text>
          <Text style={styles.textunder}>React Native: minimum FlatList</Text>
          
          <FlatList 
            data={this.state.adata}
            renderItem={({item}) => this.renderme1(item.key)}
            ListFooterComponent={this.indicator11}
            ListHeaderComponent={this.renderme2}
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
export default Categornativemini;