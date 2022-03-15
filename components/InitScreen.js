import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-paper'
import LottieView from 'lottie-react-native'

export default ({ navigation }) => {
    let signIn = () => {
        navigation.navigate('Info')
    }
    return (
        <View style={styles.container}>
            <LottieView source={require('./../assets/70303-makeup-beauty.json')} autoPlay loop style={styles.logo} />
            <TouchableOpacity
                onPress={() => {
                    navigation?.navigate('Info', {
                        title: "fuck",
                        content: "shiet",
                    })
                }}
            >
                <Button mode="contained" style={styles.button}><Text style={styles.buttonText}>START</Text></Button>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {

        width: 300,
        height: 300,
    },

    button: {
        backgroundColor: "#3b5998",
        padding: 10,
        borderRadius: 10,
        margin: 30
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
});