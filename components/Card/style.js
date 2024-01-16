import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 9,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});