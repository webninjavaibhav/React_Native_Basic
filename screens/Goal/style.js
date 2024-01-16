import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      padding: 50
    },
    inputBox: {
        borderColor: '#000',
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        width: '80%',
    },
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '60%'
    },
    itemViewer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        borderColor: '#000',
        borderWidth: 1,
    },
    button:{
        width: '40%'
    }
});