import * as React from 'react';
import 'react-native-gesture-handler'
import { useColorScheme } from 'react-native'
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import merge from 'deepmerge';
import Init from './components/InitScreen.js'
import About from './components/About.js'
import Info from './components/Info.js'
import {Header} from './components/Header.js'
import {PreferencesContext} from './common/context'

export default function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false)
  
  const toogleTheme = React.useCallback(()=>{
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark])

  const preferences = React.useMemo(()=>({
    isThemeDark,
    toogleTheme
  }),[isThemeDark, toogleTheme])
  const Stack = createStackNavigator();
  const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
  const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Init" headerMode ="screen" 
          screenOptions={{
            header:({scene, navigation})=>(
              <Header scene ={scene} navigation={navigation}></Header>
            )
          }}
          >
            <Stack.Screen
              name=" "
              component={Init}
            ></Stack.Screen>
            <Stack.Screen
              name="About"
              component={About}
            ></Stack.Screen>
            <Stack.Screen
              name="Info"
              component={Info}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}


