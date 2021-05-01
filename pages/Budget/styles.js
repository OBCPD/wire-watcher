import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },

  title: {
    fontSize: 22,
    paddingLeft: 12,
    marginBottom: 12,
  },

  info: {
    marginBottom: 12,
  },

  formLabel: {
    paddingLeft: 4,
    marginBottom: 2,
  },

  formInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#0016a8',
    padding: 8,
    marginBottom: 12,
  },

  formButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#0016a83a',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  formButtonText: {
    textAlign: 'center',
    fontSize: 16,
  },
})
