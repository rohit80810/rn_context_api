import React, { Fragment } from 'react';
import {
  View,Text
} from 'react-native';
import UserInfo from './UserInfo'


class Home extends React.Component {
  render() {
    return (
   <View style ={{flex:1,justifyContent:'center',alignItems:'center'}}>
     <Text>Home</Text>
     <UserInfo/>
   </View>
  )}
};

export default Home;
