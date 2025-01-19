import React from "react";
import { StyleSheet, Text, View } from 'react-native';
function List() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Image</Text>
            </View>
            <View style={styles.textBox}>
                <Text style={styles.text}>Heading Text</Text>
            </View>
        </View>
    );
}
export default List;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', // Arrange children side by side
        justifyContent: 'space-around', // Space between the boxes
        alignItems: 'center', // Align items vertically in the center
        padding: 10,
      },
      box: {
        flex: 1, // Equal width for both boxes
        justifyContent: 'center', // Center content vertically within the box
        alignItems: 'center', // Center content horizontally within the box
        marginRight: 10, // Add spacing between boxes
        height: 50, // Fixed height
        width:50,
        backgroundColor: '#f0f0f0', // Light gray background for the boxes
      },
      text: {
        fontSize: 16,
        color: '#333',
        width:100,
      },
      textBox:{
        flex: 1, // Equal width for both boxes
        justifyContent: 'center', // Center content vertically within the box
        alignItems: 'center', // Center content horizontally within the box
        height: 50, // Fixed height
        width:100,
        backgroundColor: 'red', // Light gray background for the boxes
      }
});