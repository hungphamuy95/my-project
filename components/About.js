import React from 'react';
import {StyleSheet, Text} from 'react-native'

export default ({navigation})=>{
    return(
        <Text style={styles.header}>About</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        paddingTop: 30
      },
  })