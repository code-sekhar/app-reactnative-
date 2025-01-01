import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Home(props: {
    address: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null ; age: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; children?: React.ReactNode; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; 
}) {
    return (
        <View>
            <Text style={styles.text}>Home button</Text>
            <Text style={styles.text}>Welcome {props.name} off Our Website</Text>
            <Text style={styles.text}>Age : {props.age}</Text>
            <Text style={styles.text}>Address :{props.address}</Text>
        </View>
    );
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        width: 50,
        height: 50,
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