import React from 'react'
import {Button, StyleSheet, TextInput, View, Text} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 30,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    textAlign: 'center',
  },
})

export default class AddContactForm extends React.Component {
  state = {
    key: '',
    val: '',
  }

  handleKeyChange = key => {
    this.setState({key})
  }

  handleValChange = val => {
    this.setState({val})
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.key, '- ' + this.state.val)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.key}
          onChangeText={this.handleKeyChange}
          placeholder="Date/Time"
        />
        <TextInput
          style={styles.input}
          value={this.state.val}
          onChangeText={this.handleValChange}
          placeholder="Task Name"
        />
        <Text>
        {"\n"}
        </Text>
        <Button title="Add Task" onPress={this.handleSubmit} />
      </View>
    )
  }
}
