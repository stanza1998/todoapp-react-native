/* eslint-disable */
import {View, StyleSheet, Text} from 'react-native';

export const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
      <Text style={styles.box4}>Box 4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    padding: 40,
  },
  box1: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10,
  },
  box2: {
    flex: 7,
    backgroundColor: 'green',
    padding: 30,
  },
  box3: {
    flex: 3,
    backgroundColor: 'colar',
    padding: 10,
  },
  box4: {
    flex: 4,
    backgroundColor: 'red',
    padding: 20,
  },
});
