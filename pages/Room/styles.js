import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 12,
    },

    title: {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: 32,
    },
    
    text: {
        fontSize: 16,
    },

    deviceList: {
        marginTop: 8,
    },

    deviceButton: {
        padding: 6,
        marginBottom: 12,
        backgroundColor: '#0016a83a',
        borderRadius: 4,
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center'
    },

    buttonIcon: {
        marginLeft: 2,
        marginRight: 8
    },

    deviceTitle: {
        textTransform: 'capitalize',
        fontSize: 24,
    }
})
