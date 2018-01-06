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
    View,
    TouchableOpacity
} from 'react-native';

let serverURL = "http://api.ptcvdep.net/";
export default class ProductItem extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  _itemSelected(item){
    // console.log(item, "_itemSelected");
  }

  render() {
    // console.log("ProductItem",this.props.dataItem);
    var item = this.props.dataItem;
    var imageURI = serverURL + item.imagePath + "/" + item.imageFileName;
    // console.log(imageURI);
    var price = item.price + " ریال";
    return (
      <TouchableOpacity onPress={() => { this._itemSelected(item); }}>
        <View key={item.id} style={styles.item}>
            <Image style={styles.image} source={{ uri: imageURI }} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>{item.price + " ریال"}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  item:{
    backgroundColor: '#fefefe',
    marginRight: 15,
    borderWidth: 0.5,
    borderColor: '#ccc',
    height: 290,
    width: 200
  },
  image:{
    resizeMode: 'cover',
    width: 140,
    height: 165,
    marginTop: 20,
    marginBottom: 30,
    alignSelf: 'center'
  },
  title: {
    color: '#333',
    fontSize: 12,
    textAlign: 'center',
    paddingBottom: 10
  },
  price: {
    color: '#008000',
    fontSize: 12,
    textAlign: 'left',
    paddingLeft: 15,
    borderColor: '#ccc',
    paddingTop: 10,
    borderTopWidth: 0.5,
  }
})
