import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Groups = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Groups screen</Text>
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '700',
    color: 'grey',
  },
});
