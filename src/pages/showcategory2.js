// like ./index.js
import React from 'react';
import Catlist from '../components/catlist';
import '../App.css';
import { StyleSheet,  Text, View } from 'react-native';
// import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import DB1 from '../db1';

class Showcategory2 extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      db1: new DB1(),
      catnotes: {},
      loading: true
    }
    console.log('showcategory2js;props', props);
  }
  static contextTypes = {
    router: () => null, // replace with PropTypes.object if you use them
  }
  async componentDidMount() {
      const catnotes = await this.state.db1.getcategory(this.props.cat);
     // const catnotes = await this.state.db1.getcatnotesdb(this.props.cat);
    this.setState({
      catnotes,
      loading: false
    });
  }
  
   render() {
       // const a11 = Object.values(this.state.catnotes);
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
                pages/showcategory2js
              </legend> 
              <View style={styles.box}>
                <Text style={styles.textunder}>
                  plain React with Native insert 
                </Text>
              </View>
                 <h2><span style={{fontSize: '0.7em'}}>category:</span>{this.props.cat.title}</h2>
               <Catlist notes={this.state.catnotes} />
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
export default Showcategory2;
