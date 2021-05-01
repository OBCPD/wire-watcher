import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 12,
    },

    title: {
        textAlign: 'center',
        fontSize: 32,
    },

    roomList: {
        marginTop: 8,
    },

    roomButton: {
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

    roomTitle: {
        textTransform: 'capitalize',
        fontSize: 24,
    }
})
