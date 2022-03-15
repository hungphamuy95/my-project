import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import {
    TextInput
} from 'react-native-paper';
import {MainPanel} from './../components/MainPanel.js'

export default ({ navigation, route }) => {
    const { title, content } = route?.params

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", alignContent: "center" }}>
                    <TextInput
                        mode="outlined"
                        label="What are you looking for"
                        placeholder="Search"
                        style={styles.txtName}
                    />
                </View>
                <MainPanel></MainPanel>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: "center"
    },
    txtName: {
        flex: 0.95,
        margin: 10
    },
    chipButton: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    cardItem: {
        width: 300,
        marginRight: 30
    }
})