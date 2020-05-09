import React, {Fragment} from 'react';
import HomePage from './components/HomePage';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

const Main = () => {
  return (
    <Fragment>
      <HomePage />
      <View style={styles.pages}>
        <View style={styles.iconWrapper}>
          <FontAwesomeIcon name="commenting" size={25} color="green" />
          <Text style={{...styles.smallText, color: 'green'}}>Home</Text>
        </View>
        <View style={styles.iconWrapper}>
          <FontAwesomeIcon name="heart-o" size={25} color="grey" />
          <Text style={styles.smallText}>Stories</Text>
        </View>
        <View style={styles.iconWrapper}>
          <SimpleLineIcon
            name="camera"
            size={25}
            color="white"
            style={styles.camera}
          />
          <Text style={{...styles.smallText, position: 'relative', top: -10}}>
            Camera
          </Text>
        </View>
        <View style={styles.iconWrapper}>
          <SimpleLineIcon name="user" size={25} color="grey" />
          <Text style={styles.smallText}>People</Text>
        </View>
        <View style={styles.iconWrapper}>
          <SimpleLineIcon name="settings" size={25} color="grey" />
          <Text style={styles.smallText}>Settings</Text>
        </View>
      </View>
    </Fragment>
  );
};

export default Main;

const styles = StyleSheet.create({
  pages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  smallText: {
    color: 'grey',
    marginTop: 5,
  },
  camera: {
    backgroundColor: 'grey',
    padding: 10,
    position: 'relative',
    top: -10,
    borderRadius: 50,
  },
});
