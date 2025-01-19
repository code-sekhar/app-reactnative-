import React from "react";
import { StyleSheet, Text, View } from "react-native";
function List() {
    return (
        <View>
            <Text style={styles.text}>list</Text>
        </View>
    );
}
export default List;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    text:{
        fontSize: 20,
        marginBottom: 20
    }
});