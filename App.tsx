/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet, TouchableOpacity,
  Text,
  View,
} from 'react-native';
import Home from './pages/Home';


function App(): React.JSX.Element {
  const [buttonColor, setButtonColor] = useState('blue'); // প্রাথমিক রঙ

  const handlePress = () => {
    console.log('click');
    // বোতামের রঙ পরিবর্তন
    setButtonColor(buttonColor === 'blue' ? 'green' : 'blue');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click the Button</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={()=>handlePress()}
      >
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
      <Home name= "Sekhar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;



