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
    View
} from 'react-native';
import RenderLayout from './RenderLayout';


let Storage_Key = "@Apps:key";

export default class App extends Component < {} > {
    constructor(props) {
      super(props);
    
      this.state = {layoutData: null};
    }

    // fetch(api)
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     this.setState({
    //       photo : {
    //         url : responseData.data.url,
    //         height: responseData.data.height,
    //         width: responseData.data.width,
    //       },
    //     });
    //   })
    //   .done();

    // async _dataBind(data){
    //     console.log("_dataBind", data);
    //     this.setState({layoutData: data});
    //     try{
    //         console.log("AsyncStorage.setItem");
    //         await AsyncStorage.setItem(Storage_Key, data);
    //     } catch(err){
    //         console.log(err, "err");
    //     }
    // }

    getLayoutData(successCallBack, failureCallBack){
        var api = 'https://api.ptcvdep.net/v1/lava/advertisement/home';
        // const data = {
        //     "Authorization": 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvbWlkc2Fiel9tbmciLCJqdGkiOiJjOWVmMTY5OC0zOWViLTQ5YWItODBjNC03ZDA3NGY1OTc2M2IiLCJpYXQiOjE1MTQ0OTY2OTYsInJvbGVzIjpbIkFwaUFkbWluIiwiTGF2YU1hbmFnZXIiLCJUb2JpbkFwcCJdLCJ1aXUiOiI3IiwidWljIjoiNyIsImN1aXUiOiIxOTg3NyIsInVpY3AiOiIxOTg3NyIsInVpY24iOiLYp9mF2YrYryDYs9io2LIiLCJscGxpZCI6IjQiLCJuYmYiOjE1MTQ0OTY2OTcsImV4cCI6MTUxNzA4ODY5NywiaXNzIjoiU3VwZXJBd2Vzb21lVG9rZW5TZXJ2ZXIiLCJhdWQiOiJodHRwOi8vMC4wLjAuMDo4MDg2LyJ9.jdndeA58ADWz0vDYujkJ4YRfMfHxbgQFwaOIF6Gw-4c',
        //     "DeviceVersion": 10
        // };
        fetch(api, {
            method: 'GET',
            headers: {
                // "Accept": '*/*',
                // "Accept": 'application/json',                
                'Content-Type': 'application/json; charset=utf-8',
                Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvbWlkc2Fiel9tbmciLCJqdGkiOiJjOWVmMTY5OC0zOWViLTQ5YWItODBjNC03ZDA3NGY1OTc2M2IiLCJpYXQiOjE1MTQ0OTY2OTYsInJvbGVzIjpbIkFwaUFkbWluIiwiTGF2YU1hbmFnZXIiLCJUb2JpbkFwcCJdLCJ1aXUiOiI3IiwidWljIjoiNyIsImN1aXUiOiIxOTg3NyIsInVpY3AiOiIxOTg3NyIsInVpY24iOiLYp9mF2YrYryDYs9io2LIiLCJscGxpZCI6IjQiLCJuYmYiOjE1MTQ0OTY2OTcsImV4cCI6MTUxNzA4ODY5NywiaXNzIjoiU3VwZXJBd2Vzb21lVG9rZW5TZXJ2ZXIiLCJhdWQiOiJodHRwOi8vMC4wLjAuMDo4MDg2LyJ9.jdndeA58ADWz0vDYujkJ4YRfMfHxbgQFwaOIF6Gw-4c',
                DeviceVersion: 10
            },
            // body: {
            //     "Authorization": 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvbWlkc2Fiel9tbmciLCJqdGkiOiJjOWVmMTY5OC0zOWViLTQ5YWItODBjNC03ZDA3NGY1OTc2M2IiLCJpYXQiOjE1MTQ0OTY2OTYsInJvbGVzIjpbIkFwaUFkbWluIiwiTGF2YU1hbmFnZXIiLCJUb2JpbkFwcCJdLCJ1aXUiOiI3IiwidWljIjoiNyIsImN1aXUiOiIxOTg3NyIsInVpY3AiOiIxOTg3NyIsInVpY24iOiLYp9mF2YrYryDYs9io2LIiLCJscGxpZCI6IjQiLCJuYmYiOjE1MTQ0OTY2OTcsImV4cCI6MTUxNzA4ODY5NywiaXNzIjoiU3VwZXJBd2Vzb21lVG9rZW5TZXJ2ZXIiLCJhdWQiOiJodHRwOi8vMC4wLjAuMDo4MDg2LyJ9.jdndeA58ADWz0vDYujkJ4YRfMfHxbgQFwaOIF6Gw-4c',
            //     "DeviceVersion": 10,
            // }
        }).then(function(response, responseText) {
            successCallBack(JSON.parse(response._bodyText).data);
            console.log(response, JSON.parse(response._bodyText), JSON.parse(response._bodyText).data);
            // var data = JSON.parse(response._bodyText).data;
            // console.log(data, "data",this,this.props);
            // this.setState(data);
            // this.changeState({layoutData: data});
            // console.log(this.state.layoutData,"this.state.layoutData");
            // this._dataBind(JSON.parse(response._bodyText).data);
            // data = response;
            // return response.blob();
        });
    }

    componentWillMount() {
        console.log("componentWillMount");
        this.getLayoutData(function(data){
            console.log(data, "data");
            this.setState({layoutData: data});
        }.bind(this));

        // fetch(`https://api.parse.com/1/users?foo=${encodeURIComponent(data.foo)}&bar=${encodeURIComponent(data.bar)}`, {
        //     method: "GET",
        //     headers: headers,
        //     body: body
        // })
    }

    // fetch(api).then(function(response) {
    //     console.log(response);
    // });
  render() {
    console.log("render", this.state.layoutData);
    let data =JSON.stringify(this.state.layoutData);
    return (
      <View style={styles.container}>
        <RenderLayout 
            layoutData = {data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccccdd',
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
});