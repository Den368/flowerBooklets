import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, BackAndroid, View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/DrawerContentStyles'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  /**
   * When the user taps Exit in the Navigation Drawer
   */
  handlePressExit = () => {
    this.toggleDrawer()
    // TODO: Handle logout
  }

  render () {
    return (
      <View style={styles.container}>
        <DrawerHeader
          userName={this.props.userName} />
        <DrawerBody
          onExit={this.handlePressExit}
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
          onRegister={this.handleRegistration}
          isLoggedIn={this.props.isLoggedIn} />

      </View>
    )
  }

}

/** Drawer Header View  */
const DrawerHeader = (props) => {
  return (
    <View style={styles.drawerHeader}>
    </View>
  )
}

/** Drawer Footer View  */
const DrawerBody = (props) => {
  return (
    <View style={styles.drawerBody}>
    </View>
  )
}

const DrawerAction = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View style={styles.actionRow}>
        <Image resizeMode={Image.resizeMode.contain} style={styles.actionImage} source={props.uri} />
        <Text style={styles.actionText}>{props.action}</Text>
      </View>
    </TouchableOpacity>
  )
}

DrawerBody.contextTypes = {
  isLoggedIn: React.PropTypes.bool
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}
// DrawerHeader props
DrawerHeader.contextTypes = {
  userName: React.PropTypes.string
}

// DrawerAction props
DrawerAction.contextTypes = {
  action: React.PropTypes.string,
  uri: React.PropTypes.number,
  onPress: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
