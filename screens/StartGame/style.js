import { StyleSheet, Dimensions } from 'react-native';

// Dimensions use for responsive design 
// screen exclude status bar for android always use window for both ios & android
// You can check condition using Dimensions and can set margin & padding according 
// Ex. Dimensions.get('window').height > 600 ? 20 : 10 

export const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 10
    },
    button: {
        width: Dimensions.get('window').width / 4,
        marginVertical: 10
    },
    input: {
        height: 50,
        width: 50,
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        textAlign: 'center'
    },
    summaryContainer : {
        marginVertical: 10
    }
});