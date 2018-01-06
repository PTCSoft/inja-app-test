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

let serverURL = "http://api.ptcvdep.net/";
export default class One extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    // console.log(this.props, "oNe Props");
    var data = this.props.items[0];
    var imageURI = serverURL + data.imagePath + "/" + data.imageFileName;
    return (
      <View key={data.tagId}>
        <Image style={styles.image} source={{ uri: imageURI }} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    minHeight: 200,
    minWidth: 400,
    marginBottom: 15
  },
  image:{
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    width: 400,
    height: 200,
  },
})