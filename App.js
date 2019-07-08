/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  View, Text
} from 'react-native';
import Home from './Home'


const MyContext = React.createContext();
class App extends React.Component {
  state = {
    name : 'Rohit Sharma'
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MyContext.Provider value = {this.state.name}>
          <Home />
        </MyContext.Provider>
      </View>
    )
  }
};

export default App;
