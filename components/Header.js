import React from 'react';
import { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { PreferencesContext } from './../common/context.js';

export const Header = ({ scene, navigation }) => {
  const theme = useTheme()
  let textMode = theme => {
    if(theme)
      return "Dark Mode"
    return "Ligth Mode"
  }
  return (
    <PreferencesContext.Consumer>
      {(context) =>
        <Appbar.Header
          theme={{
            colors: {
              primary: theme?.colors.surface
            }
          }}
        >
          {navigation.canGoBack() ? <Appbar.BackAction onPress={() => navigation.pop()} /> : <MaterialCommunityIcons name="react" size={24} color="gray" />}
          <Appbar.Content title={scene.route?.name} />
          <Text style={{color:"gray"}}>{textMode(context.isThemeDark)}</Text>
          <Switch
            onValueChange={context.toogleTheme}
            color={'red'}
            value={context.isThemeDark}
          ></Switch>
        </Appbar.Header>
      }
    </PreferencesContext.Consumer>
  )
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});