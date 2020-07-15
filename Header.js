import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingTop:8,
    paddingBottom:8,
    backgroundColor: '#fafad2',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})

const Header = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.text}</Text>
  </View>
)

Header.propTypes = {
  text: PropTypes.string,
}

export default Header
