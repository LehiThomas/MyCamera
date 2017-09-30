import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// Components
import Home from './app/components/Home/Home';
import CameraPage from './app/components/CameraPage/CameraPage';
import Photo from './app/components/Photo/Photo';
import GalleryPage from './app/components/GalleryPage/GalleryPage';

export default class MyCamera extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <RootNavigator />
    );
  }
}

const RootNavigator = StackNavigator({
  Home: { screen: Home },
  CameraPage: { screen: CameraPage},
  GalleryPage: { screen: GalleryPage},
  Photo: { screen: Photo}
});

AppRegistry.registerComponent('MyCamera', () => MyCamera);
