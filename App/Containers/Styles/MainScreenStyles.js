import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  name: {
    ...Fonts.style.h5,
    color: Colors.snow,
    alignSelf: 'center'
  },
  bloomSeason: {
    ...Fonts.style.h5,
    color: Colors.snow,
    alignSelf: 'center',
    bottom: 55
  }
})
