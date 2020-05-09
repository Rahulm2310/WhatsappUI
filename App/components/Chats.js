import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ChatItem from './ChatItem';
import alina from '../images/preeti.jpg';
import vikrant from '../images/tobias.jpg';
import dylan from '../images/dan.jpg';
import diana from '../images/brendan.jpg';
import ann from '../images/mxstbr.jpg';

const Chats = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.search}>
        <Icon name="search1" size={20} color="#777" />
        <Text style={styles.searchText}> Search</Text>
      </View>
      <ChatItem
        user="Alina Finiti"
        time="3:46 PM"
        message="So any plans this weekend?"
        image={alina}
        icon="check"
        color="#444"
        online={true}
        bold={true}
        position={true}
      />
      <ChatItem
        user="Bikrant Singh"
        time="10:38 AM"
        message="Missed Voice Call"
        image={vikrant}
        icon=""
        missed={true}
        color="#c93232"
        align={true}
      />
      <ChatItem
        user="Diana Fields"
        time="09:41 AM"
        message="Typing..."
        image={diana}
        icon="check-all"
        color="#26ae3b"
        online={true}
        position={true}
      />
      <ChatItem
        user="Dylan Mordin"
        time="Yesterday"
        message="Hey! what have you been up to?"
        image={dylan}
        icon="volume-mute"
        color="#444"
        online={true}
        position={true}
      />
      <ChatItem
        user="Ann Garza"
        time="Wednesday"
        message="Hello!"
        image={ann}
        icon="check-all"
        color="#444"
        story={true}
        align={true}
      />
    </ScrollView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#ddd',
    margin: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 17,
    color: '#777',
    marginHorizontal: 10,
    padding: 5,
  },
});
