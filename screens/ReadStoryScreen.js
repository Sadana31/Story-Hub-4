import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.displayText}>READ YOUR STORY!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    backgroundColor: "yellow"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
