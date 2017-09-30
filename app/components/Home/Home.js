import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to My Camera App!
        </Text>
        <Text style={styles.instructions}>
          You can take and share images :)
        </Text>
        <Text style={styles.instructions}>
          This will not look pretty.
        </Text>
        <View style={styles.buttonContainer}>
            <TouchableHighlight 
            underlayColor = {'white'}
                style={styles.button}
                onPress={() => navigate('GalleryPage')} >
                <View>
                    <Text style={styles.buttonText}>Gallery</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor = {'white'}
                style={styles.button}
                onPress={() => navigate('CameraPage')} >
                <View>
                    <Text style={styles.buttonText}>Camera</Text>
                </View>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor:'black',
    padding:10,
    margin: 5,
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  }
});

AppRegistry.registerComponent('Home', () => Home);
