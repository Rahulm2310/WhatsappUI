import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Active = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Active screen</Text>
    </View>
  );
};

export default Active;

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
