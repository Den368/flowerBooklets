import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BookletActions from '../Redux/BookletRedux'
import OldData from './oldData.json'

import ImageViewer from 'react-native-image-zoom-viewer'

// Localization
import I18n from 'react-native-i18n'

// Styles
import styles from './Styles/MainScreenStyles'

class MainScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      flowers: null,
      translations: null
    }
    this.images = []
    this.lang = I18n.locale.substr(0, 2) === 'iw' ? 'he' : I18n.locale.substr(0, 2)
  }

  componentDidMount () {
    this.props.BookletActions.tranlationRequest()
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.fetching && (newProps.booklet.translationError || newProps.booklet.error)) {
      // on error get the old saved data
      this.setState({ flowers: OldData.flowers.data, translations: OldData.translations.data })
    } else if (!newProps.fetching && !newProps.booklet.data && newProps.booklet.translations) {
      // after you got all the translations send another get request
      this.props.BookletActions.flowersRequest()
    } else if (!newProps.fetching && newProps.booklet.data) {
      // got all the data
      this.setState({ flowers: newProps.booklet.data, translations: newProps.booklet.translations })
    }
  }

  getImage () {
    let images = []
    for (let i = 0; i < this.state.flowers.length; i++) {
      images.push({ url: this.state.flowers[i]['image link'] })
    }
    return images
  }

  header = (currentIndex) => {
    let engName = this.state.flowers[currentIndex].name
    return (
      <View>
        <Text style={styles.name}>{ !this.state.translations[this.lang][engName] ? engName : this.state.translations[this.lang][engName] }</Text>
      </View>
    )
  }

  footer = (currentIndex) => {
    let engSeason = this.state.flowers[currentIndex]['best season']
    return (
      <View>
        <Text style={styles.bloomSeason}>{ !this.state.translations[this.lang][engSeason] ? engSeason : this.state.translations[this.lang][engSeason] }</Text>
      </View>
    )
  }

  render () {
    return this.state.flowers && this.state.translations ?
      <View style={styles.container}>
        <ImageViewer
          imageUrls={this.getImage()}
          enableImageZoom
          loadingRender={() => <ActivityIndicator animating size='large' color={'white'} />}
          renderHeader={this.header}
          renderFooter={this.footer} />
      </View> : <View />
  }

}

const mapStateToProps = (state) => {
  return {
    fetching: state.booklet.fetching,
    booklet: state.booklet
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    BookletActions: bindActionCreators(BookletActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
