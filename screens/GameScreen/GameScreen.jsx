import React, { useState, useRef } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Card from '../../components/Card/Card';
import { styles } from './style'

const getRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if(randomNumber === exclude) {
        getRandomNumber(min, max, exclude)
    } else {
        return randomNumber;
    }
}

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(getRandomNumber(1, 100, props.userChoice));

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    /**
     * Guess next number
     * @param {*} direction 
     */
    const nextHandler = direction => {

        if((direction === 'low' && currentGuess < props.userChoice) || (direction === 'high' && currentGuess > props.userChoice)) {
            Alert.alert('Sorry!!', 'You are wrong..', [
                {
                    text: 'Cancel',
                    style: 'cancel'
                }
            ])
            return;
        } 
        if(direction === "low") {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        setCurrentGuess(getRandomNumber(currentLow.current, currentHigh.current, currentGuess))

    } 

    return (
        <View style={styles.mainScreen}>
            <Text>Game Screen</Text>
            <Text>{currentGuess}</Text>
            <Card>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => nextHandler('low')} title="Lower" />
                    <Button title="Grater" onPress={() => nextHandler('high')} />
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;