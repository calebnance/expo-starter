import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function PlusScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Plus Tab Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  }
});

export default PlusScreen;
