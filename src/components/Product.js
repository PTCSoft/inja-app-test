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
  View,
  FlatList
} from 'react-native';
import ProductItem from './ProductItem';

export default class Product extends Component {
  constructor(props) {
      super(props);
    
      this.state = {data: null}; // products data
    }

  getData(successCallBack, failureCallBack){
    var dt1 = Date.now();
    // console.log(this.props,"Product props", this.props.items[0].tagId);
    var api = 'https://api.ptcvdep.net/v1/lava/product/GetListByTag?skip=0&takecount=8&parentId='+this.props.items[0].tagId+'&sort=PriceAscending&searchvalue&justavailablenumber=false';
    fetch(api, {
        method: 'GET',
        headers: {
            // "Accept": '*/*',
            // "Accept": 'application/json',                
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvbWlkc2Fiel9tbmciLCJqdGkiOiJjOWVmMTY5OC0zOWViLTQ5YWItODBjNC03ZDA3NGY1OTc2M2IiLCJpYXQiOjE1MTQ0OTY2OTYsInJvbGVzIjpbIkFwaUFkbWluIiwiTGF2YU1hbmFnZXIiLCJUb2JpbkFwcCJdLCJ1aXUiOiI3IiwidWljIjoiNyIsImN1aXUiOiIxOTg3NyIsInVpY3AiOiIxOTg3NyIsInVpY24iOiLYp9mF2YrYryDYs9io2LIiLCJscGxpZCI6IjQiLCJuYmYiOjE1MTQ0OTY2OTcsImV4cCI6MTUxNzA4ODY5NywiaXNzIjoiU3VwZXJBd2Vzb21lVG9rZW5TZXJ2ZXIiLCJhdWQiOiJodHRwOi8vMC4wLjAuMDo4MDg2LyJ9.jdndeA58ADWz0vDYujkJ4YRfMfHxbgQFwaOIF6Gw-4c',
            DeviceVersion: 10
        },

    }).then(function(response, responseText) {
        successCallBack(JSON.parse(response._bodyText).data);
        var dt2 = Date.now();
        // console.log((dt2-dt1)/1000, " s get Product");
        // console.log(response, JSON.parse(response._bodyText), JSON.parse(response._bodyText).data);
    });
  }

  componentWillMount() {
    // console.log("componentWillMount");
    this.getData(function(data){
        // console.log(data, "Product data");
        this.setState({data: data});
    }.bind(this));
  }

  render() {
    return (
      <View key={this.state.position} style={styles.container}>
        <View key={this.props.items[0].tagId}>
          <Text style={styles.productsHeader}>
            {this.props.title}
          </Text>
        </View>
        <FlatList
          horizontal={true}
          data={this.state.data}
          renderItem={({item}) => <ProductItem dataItem={item} key={item.id}/>} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    marginBottom: 15
  },
  items: {
    flex: 1,
    flexDirection: 'row',
  },
  productsHeader:{
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'right',
    paddingRight: 10 
  }
})
