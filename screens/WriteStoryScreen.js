import * as React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#FF8C00'}
          centerComponent={{
            text: 'STORY HUB',
            style: {
              color: '#FF0000',
              fontSize: 30,
              fontWeight: 'bold',
              fontFamily: 'Courier',
            },
          }}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Title of the Story"></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Author of the Story"></TextInput>
        <TextInput
          style={styles.content}
          placeholder="Write Story"
          multiline={true}></TextInput>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#FF8C00',
    width: 100,
    borderWidth: 1.5,
    borderColor: '#FF0000',
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#0000cd',
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF0000',
  },
  inputBox: {
    width: 290,
    height: 40,
    borderWidth: 2,
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  content: {
    backgroundColor: 'white',
    width: 290,
    fontWeight: 'bold',
    color: '#FF8C00',
    height: 250,
    borderWidth: 2,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});
