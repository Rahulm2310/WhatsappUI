import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatItem = ({
  user,
  time,
  message,
  image,
  icon,
  color,
  missed,
  online,
  story,
  bold,
  position,
  align,
}) => {
  return (
    <View
      style={{
        ...styles.chatItem,
        position: 'relative',
        top: align ? 7 : 0,
        marginBottom: align ? 12 : 0,
      }}>
      <View style={{position: 'relative', top: position ? 10 : 0}}>
        <Image
          source={image}
          style={{
            ...styles.img,
            borderWidth: story ? 3 : 0,
            borderColor: story ? '#26ae3b' : 'transparent',
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
            {missed ? (
              <Icon
                name="subdirectory-arrow-left"
                size={20}
                color={color}
                style={{marginRight: 7}}></Icon>
            ) : (
              <Text></Text>
            )}
            <Text
              style={{
                ...styles.messageText,
                color: `${color}`,
                fontWeight: bold ? 'bold' : '200',
              }}>
              {message}
            </Text>
          </View>
          <Icon
            name={icon}
            size={20}
            color={
              icon === 'check' || icon === 'check-all' ? '#26ae3b' : 'grey'
            }
          />
        </View>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  chatItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 3,
    paddingLeft: 20,
  },
  // profileImage: {
  //   position: 'relative',
  //   top: 5,
  // },
  img: {
    borderRadius: 50,
    width: 65,
    height: 65,
  },
  online: {
    backgroundColor: '#26ae3b',
    width: 17,
    height: 17,
    borderRadius: 8,
    position: 'relative',
    top: -15,
    borderColor: 'white',
    borderWidth: 3,
    margin: 0,
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
    fontSize: 14,
  },
});
