import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Goal from './screens/Goal/Goal';
import StartGame from './screens/StartGame/StartGame';
import GameScreen from './screens/GameScreen/GameScreen'
import Header from './components/Header/Header';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


// To apply global fontFamily just use reusable componnets or make common style for fonts
// SafeAreaView give design solution for modern device
// During landscape mode having trouble for all side padding it will auto adjust.

/**
 * To load custom fonts 
 */
const fetchFonts = () => {
 return Font.loadAsync({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

const App = () => {

  const [userNumber, setUserNumber] = useState();
  const [fontsLoaded, setFontLoaded] = useState(false);

  // Load our custom fonts
  if(!fontsLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }

  return <SafeAreaView style={{ flex: 1 }}>
    <Header title="My First app"/>
    { userNumber ? <GameScreen userChoice={userNumber} /> : <StartGame onStartGame={setUserNumber}/> }
      <Goal />
    </SafeAreaView>
}

export default App;
