import React from 'react';
import { SectionList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Header from './Header'
import ModifyObjectForm from './ModifyObjectForm'
import Row from './Row'

const DEFAULT_OBJECT = {
  'Today 3pm': ['- Fetch kids from school'],
}

const toArray = val => val instanceof Array ? val : [val]

const toObject = (value, key) => ({key, value})

const renderItem = ({item}) => <Row {...item} />

const renderSectionHeader = ({section}) => <Header text={section.title} />

export default class App extends React.Component {
  state = {
    obj: DEFAULT_OBJECT,
    showForm: false,
  }

  showForm = () => {
    this.setState({showForm: true})
  }

  modifyObject = (key, val) => {
    let parsed
    try {
      parsed = JSON.parse(val)
    } catch (err) {
      parsed = val
    }

    this.setState(prevState => {
      if (prevState.obj[key] instanceof Array) {
        return {showForm: false, obj: {...prevState.obj, [key]: [parsed, ...prevState.obj[key]]}}
      }
      return {showForm: false, obj: {...prevState.obj, [key]: parsed}}
    })
  }

  render() {
    if (this.state.showForm) return <ModifyObjectForm onSubmit={this.modifyObject} />

    const sections = Object.keys(this.state.obj).map(key => ({
      key,
      title: key,
      // turn array of values into array of objects in the shape {key, value}
      data: toArray(this.state.obj[key]).map(toObject),
    }))

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.showForm}>
        <Text style={styles.button}>
          Click here to add new task!
        </Text>
        </TouchableOpacity>
        <Text style={styles.heading}> Current Tasks </Text>
        <SectionList
          style={styles.list}
          sections={sections}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    paddingTop: 25,
  },
  list: {
    flex: 1,
    borderColor: '#daa520',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10, 
    backgroundColor: '#f0e68c',
  },
  button: {
    textAlign: 'center',
    padding: 18,
    backgroundColor: '#f5deb3',
  },
  heading: {
    textAlign:"center",
    padding:13, 
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: '#daa520',
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    backgroundColor:'#f0e68c',
    textAlignVertical:'bottom',
  }
});
