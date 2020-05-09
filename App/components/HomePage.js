import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import CallsScreen from './Calls';
import ChatsScreen from './Chats';
import GroupsScreen from './Groups';
import ActiveScreen from './Active';

const Tab = createMaterialTopTabNavigator();

const HomePage = () => {
  return (
    <NavigationContainer>
      <View style={styles.header}>
        <Text style={styles.smallText}>Edit</Text>
        <Text style={styles.headerTitle}>Home</Text>
        <Icon name="plus" size={25} color="#fff" />
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#80e990',
          labelStyle: {fontSize: 16, textTransform: 'none'},
          tabStyle: {width: 100},
          indicatorStyle: {backgroundColor: '#80e990'},
          style: {backgroundColor: '#26ae3b'},
        }}>
        <Tab.Screen name="Chats" component={ChatsScreen} />
        <Tab.Screen name="Groups" component={GroupsScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
        <Tab.Screen name="Active" component={ActiveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#26ae3b',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
  },
  smallText: {
    fontSize: 15,
    color: '#ddd',
  },
});
