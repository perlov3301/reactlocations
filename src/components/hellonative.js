import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Hellonative extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>hellonative.js</legend>
        <View style={styles.box}>
          <Text style={styles.text}>Hello, world!</Text>
      </View>
      </fieldset>
      
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
});
export default Hellonative;