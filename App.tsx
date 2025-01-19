/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View
} from 'react-native';
import List from './pages/List';






function App(): React.JSX.Element {
  // const [buttonColor, setButtonColor] = useState('blue'); // প্রাথমিক রঙ
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  // const handlePress = () => {
  //   console.log('click');
  //   // বোতামের রঙ পরিবর্তন
  //   setButtonColor(buttonColor === 'blue' ? 'green' : 'blue');
  // };

  return (
    <List />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   button: {
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   textInput:{
//     borderColor: 'green',
//     borderWidth: 2,
//     margin: 10,
//     width: '100%',
//     fontSize: 20,
//     borderRadius: 15,
//   },
//   boxCard:{
//     padding: 20,
//     margin: 20,
//     boxShadow: '1px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
//     borderRadius: 15,
//   },
// });

export default App;



