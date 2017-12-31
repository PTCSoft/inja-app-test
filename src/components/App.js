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
    ScrollView
} from 'react-native';
import RenderLayout from './RenderLayout';


let Storage_Key = "@Apps:key";

export default class App extends Component < {} > {
    constructor(props) {
      super(props);
    
      this.state = {layoutData: null};
    }

    getLayoutData(successCallBack, failureCallBack){
        var api = 'https://api.ptcvdep.net/v1/lava/advertisement/home';
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
            console.log(response, JSON.parse(response._bodyText), JSON.parse(response._bodyText).data);
        });
    }

    componentWillMount() {
        console.log("componentWillMount");
        this.getLayoutData(function(data){
            console.log(data, "data");
            this.setState({layoutData: data});
        }.bind(this));

    }
  render() {
    console.log("render", this.state.layoutData);
    return (
          <View style={styles.container}>
            <RenderLayout 
                layoutData = {this.state.layoutData} />
          </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ccccdd',
        flex: 1,
        // paddingTop: 10,
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
    }
});