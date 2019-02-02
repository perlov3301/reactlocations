import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchlocations1 } from '../actions/loactions';
import { StyleSheet, Text, View, SectionList,
  ActivityIndicator } from 'react-native';
import { any } from 'prop-types';
import DB2 from '../db2';
import DB1 from '../db1';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

class Sectionlist11 extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      dbcat: new DB2(),
      dbapp: new DB1(),
      categories: {},
      notes: {},
      catsections: [
        {title: 'Title1', data: ['it1', 'it2']},
        {title: 'Title2', data: ['item3', 'item4']},
        {title: 'Title3', data: ['item5', 'item6']},
      ],
      loading: true
    }
  }
  
  async componentDidMount() {
    console.log('sectionlist11;didmount;props=', this.props);
    //const a1 = Object.values(this.props.notes);
    const notes = await this.state.dbapp.getallnotes();
    const categories = await this.state.dbcat.getcategories();
    const a2 = Object.values(this.props.categories1);
    a2.map((n) => async () => { 
      let a = await this.state.db1.getcategory(n)
      this.setState({
        catsections: [...this.state.catsections, {title: n.title, data: [a.title]}]
      });
    });
      
    // const sectnotes = await this.state.db1.getcategory(this.props.cat);
   
  }
  
  indicator11 = () => this.state.loading ? 
    (<ActivityIndicator size="large" color="#f000ff" animating />)
    : null
    ;
  rendernotes() {
    const a1 = Object.values(this.props.notes);
    const a2 = Object.values(this.props.categories1)
  return  a1.map((n) => 
              n.title);
    
  }

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
        <legend>pages/sectionlist11.js</legend>
        <View style={styles.box}>
         <Text style={styles.textunder}>React Native: minimum SectionList</Text>
          
          <SectionList
  renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
  renderSectionHeader={({section: {title}}) => (
    <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>
      {title}
    </Text>
  )}
  sections={this.state.catsections}
  keyExtractor={(item, index) => item + index}
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
export default Sectionlist11;