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
import Slide from './Slide';
import Product from './Product';
import One from './One';

export default class RenderLayout extends Component {
    constructor(props) { 
      super(props);
    
      this.state = {layoutData: null};
    }
    componentDidMount(){
        console.log(this.props.layoutData,"layoutData");
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps, "nextProps");
        if(nextProps.layoutData !== this.state.layoutData) {
          this.setState({ layoutData: JSON.parse(nextProps.layoutData) });
        }
    }
    
    _sortByPosition(data){
        var list = data;
        list = data.sort(function(a, b) {
          const genreA = a.position;
          const genreB = b.position;

          let comparison = 0;
          if (genreA > genreB) {
            comparison = 1;
          } else if (genreA < genreB) {
            comparison = -1;
          }
          return comparison;
        });
        return list;
    }
    render() {
        console.log("render RenderLayout",this.state.layoutData);
        var data = this.state.layoutData;
        var listViews = [];
        var self = this;
        if(data){
            data = this._sortByPosition(data);
            // for (var i = 0; i < data.length; i++) {
            //     console.log(data[i]);
            //     // list[i] = this._chooseComponent(data[i]);
            //     listViews[i] = "<"+data[i].layoutType +" title="+ data[i].title+ " items="+data[i].items +" />";
            // }
            data.forEach(function (item) {
                console.log(item);
                listViews.push(self._chooseComponent(item));
                // list.push( <Slide title={item.title} items={item.items} />);
                // listViews.push(<Slide title={item.title} items={item.items} key={item.position} />);
                // var type = item.layoutType.split(/[^A-Za-z]/).filter(x => x !== '').slice(1, -1).join(' ');
                // console.log(item.layoutType, type);
                // listViews.push(<{type} title={item.title} items={item.items} key={item.position} />);
            });
            console.log(listViews);
        }
        return (
          <View >
            {listViews}
          </View>
        );
    }

    _chooseComponent(item){
        switch(item.layoutType) {
            case "Slide": return(<Slide title={item.title} items={item.items} key={item.position} />);
                break;
            case "Product": return(<Product title={item.title} items={item.items} key={item.position} />);
                break;
            case "One": return(<One title={item.title} items={item.items} key={item.position} />);
                break;
        }
    }

}
