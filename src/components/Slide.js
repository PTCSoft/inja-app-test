/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AsyncStorage,
    Platform,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
// import Slideshow from 'react-native-slideshow';
// import ImageSlider from 'react-native-image-slider';
import Swiper from 'react-native-swiper';

let serverURL = "http://api.ptcvdep.net/";
export default class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
        position: 1,
        interval: null
    };
  }

  // render() {
  //   console.log(this.props,"Slide props");
  //   return (<ImageSlider images={[
  //       'http://searchengineland.com/figz/wp-content/seloads/2015/12/google-amp-fast-speed-travel-ss-1920-800x450.jpg',
  //       'https://dummyimage.com/600x400/4f5c1e/fff.jpg&text=test',
  //       'https://dummyimage.com/600x400/c208c2/fff.jpg&text=test'
  //   ]}/>)
  // }
  // render() {
  //   return (
  //     <Slideshow 
  //       dataSource={[
  //         { url:'http://placeimg.com/640/480/any' },
  //         { url:'http://placeimg.com/640/480/any' },
  //         { url:'http://placeimg.com/640/480/any' }
  //     ]}/>
  //   );
  // }

  _slideTapped(item){
    console.log(item, "item");
  }


  render(){
    console.log(this.props,"Slide props");
    var items = this.props.items;
    var slides = [];
    var self = this;
    if(items){
      items.forEach(function (item) {
        var imageURI = serverURL + item.imagePath + "/" + item.imageFileName;
        console.log(imageURI);
        slides.push(<View style={styles.slide1} key={item.priority} onPress={() => { console.log('You tapped the button!'); self._slideTapped(item); }}><Image style={styles.image} source={{ uri: imageURI }} /><Text style={styles.text}></Text></View>);
      });
    }
    console.log(slides);
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        {slides}
      </Swiper>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    minHeight: 300,
    minWidth: 400
  },
  image:{
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'stretch',
    minWidth: 400,
    minHeight: 300
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
