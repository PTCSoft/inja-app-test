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

export default class Base extends Component {
  // used for next software architecture: send and get request
  constructor(props) {
    super(props);
  
    this.state = {};
  }
}
