/* eslint-disable */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppBarStyles} from './AppBarStyles';

export const AppBar = () => {
  return (
    <View style={AppBarStyles.Bar}>
      <View style={AppBarStyles.titleContainer}>
        <Text style={AppBarStyles.title}>My Task TODO</Text>
      </View>
    </View>
  );
};
