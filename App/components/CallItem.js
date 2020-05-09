import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const CallItem = ({
  user,
  time,
  message,
  image,
  icon,
  color,
  missed,
  online,
  story,
}) => {
  return (
    <View style={styles.chatItem}>
      <View style={styles.profileImage}>
        <Image
          source={image}
          style={{
            ...styles.img,
            borderWidth: story ? 3 : 0,
            borderColor: story ? 'green' : 'transparent',
          }}
        />
        {online && <View style={styles.online}></View>}
      </View>
      <View style={styles.chatData}>
        <View style={styles.wrapper}>
          <Text style={styles.username}>{user}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.message}>
            <FontAwesomeIcon
              name="phone"
              size={18}
              color={color}
              style={{marginRight: 9}}
            />

            <Text style={{...styles.messageText, color: `${color}`}}>
              {message}
            </Text>
          </View>
          <MaterialIcon name="keyboard-arrow-right" size={20} color="grey" />
        </View>
      </View>
    </View>
  );
};

export default CallItem;

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingLeft: 20,
  },
  img: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  online: {
    backgroundColor: 'green',
    width: 17,
    height: 17,
    borderRadius: 8,
    position: 'relative',
    top: -15,
    borderColor: 'white',
    borderWidth: 3,
  },
  chatData: {
    marginHorizontal: 20,
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
  },
  username: {
    fontSize: 18,
    color: '#000',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 13,
    color: '#777',
  },
});
