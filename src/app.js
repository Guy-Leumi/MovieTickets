import React, { Component } from 'react';
import {
  StackNavigator,
  //TabNavigator
} from 'react-navigation';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Confirmation from './Confirmation';

const PageName = (props) => {
  return (props.na)
}


const RootStack = StackNavigator(
  {
  Home: {
    screen: Movies,
  },
  Confirmation : {
    screen: Confirmation
  }
 },
 {
   initialRouteName: 'Home',
 }
)


export default class App extends Component<{}>{
     render() {
       return <RootStack />
     }
}