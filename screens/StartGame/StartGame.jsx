import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../../components/Card/Card';
import { primaryColor, seconadryColor } from '../../common/styles/color'
import { styles } from './style';


// Dimensions.addEventListner('change', () => {}) Attach this to detact orintation of device Landscape or poitraite.
// https://facebook.github.io/react-native/docs/dimensions#docsNav.
// app.json have set value for orintaion you can change from there. 
// ScreenOrintaion use to lock or unlock screen runtime. It is part of expo. It is having some more functionality as well
// Platform.OS give you OS of current device you can set conditional style based on that
// Ex. Platform.OS === "ios" ? color: 'black' : 'white'
// You can assign object like this as well style={{ ...defualyStyle, Plateform.select({ ios: styleIOS, andoid: styleAndroid })}}.
// It will detect Platfrom and assign style according.
// Even you can make file like this filename.ios.js or filename.android.js to load plateform specific file
// can import normal like this import file from filename (do not mentaion .ios or .android react native will detact auto)
// https://facebook.github.io/react-native/docs/platform-specific-code



const StartGame = props => {

    const [gameNumber, setGameNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    /**
     * Handle user input & replace
     * @param {*} text 
     */
    const handleInput = text => setGameNumber(text.replace(/[^0-9]/g, ''));

    /**
     * Reset input
     */
    const resetInput = () => { 
        setGameNumber('');
        setConfirmed(false);
    }

    /**
     * Handle confirm
     */
    const handleConfirm = () => {
        if (isNaN(gameNumber) || gameNumber <= 0 || gameNumber > 99) {
            Alert.alert('Invalid Input!!!', 'Choose number betwwen 1 - 99', [{
                text: 'Okay',
                style: 'destructive',
                onPress: resetInput
            }])
            return;
        } 
        setSelectedNumber(parseInt(gameNumber));
        setGameNumber('');
        setConfirmed(true);
        Keyboard.dismiss();
    }
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.mainScreen}>
                <Text style={styles.title}>Start Game</Text>
                <Card style={styles.inputContainer}>
                    <Text> Select Number </Text>
                    <TextInput value={gameNumber} onChangeText={handleInput} maxLength={2} keyboardType="numeric" style={styles.input} />
                    <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button onPress={resetInput} color={seconadryColor} title="Reset"/></View>
                        <View style={styles.button}><Button onPress={handleConfirm} color={primaryColor} title="Confirm"/></View>
                    </View>
                </Card>
                { confirmed && <Card style={styles.summaryContainer}><Text> Selected Number: { selectedNumber} </Text><View style={styles.button}><Button onPress={() => props.onStartGame(selectedNumber)} color={seconadryColor} title="start"/></View></Card> }
            </View>
        </TouchableWithoutFeedback>
    );
}

export default StartGame;