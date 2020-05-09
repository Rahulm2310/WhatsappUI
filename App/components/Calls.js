import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CallItem from './CallItem';
import alina from '../images/preeti.jpg';
import vikrant from '../images/tobias.jpg';
import dylan from '../images/dan.jpg';
import diana from '../images/brendan.jpg';
import ann from '../images/mxstbr.jpg';
import jessica from '../images/quincy.jpg';
import ridhi from '../images/wes.jpg';

const Calls = () => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={styles.search}>
        <Text
          style={{
            ...styles.searchText,
            backgroundColor: '#999',
            color: '#fff',
            position: 'relative',
            right: -3,
          }}>
          All
        </Text>
        <Text style={styles.searchText}>Missed</Text>
      </View>
      <CallItem
        user="Alina Finiti"
        time="3:46 PM"
        message="Missed"
        image={alina}
        color="#c93232"
      />
      <CallItem
        user="Bikrant Singh"
        time="10:38 AM"
        message="Missed"
        image={vikrant}
        color="#c93232"
      />
      <CallItem
        user="Diana Fields"
        time="09:41 AM"
        message="Incoming"
        image={diana}
        color="#26ae3b"
      />
      <CallItem
        user="Dylan Mordin"
        time="Yesterday"
        message="Outgoing"
        image={dylan}
        color="#444"
      />
      <CallItem
        user="Ann Garza"
        time="Wednesday"
        message="Incoming"
        image={ann}
        color="#26ae3b"
      />
      <CallItem
        user="Jessica Sarah"
        time="Monday"
        message="Outgoing"
        image={jessica}
        color="#444"
      />
      <CallItem
        user="Ridhi Nair"
        time="Sunday"
        message="Missed"
        image={ridhi}
        color="#c93232"
      />
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#fff',
    margin: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 15,
    color: '#777',
    width: 120,
    padding: 4,
    borderColor: '#999',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 5,
  },
});
