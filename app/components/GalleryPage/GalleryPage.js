import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, 
         CameraRoll, Image, Dimensions, ScrollView } from 'react-native';

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
      }, () => console.log("Images gathered"));
    })
    .catch(function(error) {
      console.log('There has been a problem with your gallery: ' + error.message);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
        {
          this.state.photos.map((p, i) => {
            return (
                <Image
                  key={i}
                  style={styles.img}
                  source={{uri: p.uri}}
                />
            )
          })
        }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  img: {
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').width/3
  }
})

AppRegistry.registerComponent('GalleryPage', () => GalleryPage);
