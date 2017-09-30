import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, 
         CameraRoll, Image, Dimensions, ScrollView, } from 'react-native';

export default class GalleryPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isCameraLoaded: false,
      photos: [],
      index: null
    }
  }
  
  setIndex = (index) => {
    if (index === this.state.index) {
      index = null
    }
    this.setState({ index })
  }

  componentDidMount(){
    this.getPhotos();      
    console.log(this.state);
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(data => {
      const assets = data.edges;
      const images = assets.map((asset) => asset.node.image);
      this.setState({
        isCameraLoaded: true,
        photos: images
      }, () => console.log(this.state));
    })
    .catch(function(error) {
      console.log('There has been a problem with your gallery: ' + error.message);
    });
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
      {
        this.state.photos.map((p, i) => {
          return (
              <Image
                source={{uri: `file://${p.uri}`}}
              />
          )
        })
      }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  shareButton: {
    position: 'absolute',
    padding: 10,
    bottom: 0,
    left: 0
  }
})

AppRegistry.registerComponent('GalleryPage', () => GalleryPage);
