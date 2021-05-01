import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 12,
    },

    info: {
        fontSize: 16,
    },

    deviceListContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    deviceList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    addButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',  
    },
    addButtonIcon: {
        paddingRight: 8,
    },

    registerListTitle: {
        marginVertical: 8,
        paddingLeft: 12,
        fontSize: 24,
    },

    deviceListTitle: {
        marginVertical: 6,
        paddingLeft: 6,
        fontSize: 20,
        textTransform: 'capitalize',
    },
})
