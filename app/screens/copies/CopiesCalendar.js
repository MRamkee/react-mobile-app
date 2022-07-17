import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableHighlight,
} from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const icon = require('../../assets/success1.png');

const CopiesCalendar = ({navigation}) => {
  const vacation = {
    key: 'vacation',
    color: '#2AD2C9',
    selectedDotColor: '#2AD2C9',
  };
  const massage = {
    key: 'massage',
    color: '#ff8d6d',
    selectedDotColor: '#ff8d6d',
  };
  const workout = {key: 'workout', color: '#665F84'};

  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <Text> </Text>
      <Text>CALENDAR VIEW</Text>
      <Calendar
        markedDates={{
          '2020-10-25': {
            dots: [vacation, massage, workout],

            //   selectedColor: 'red',
          },
          '2020-10-26': {dots: [vacation, massage, workout]},
          '2020-11-01': {dots: [vacation, massage, workout]},
          '2020-11-02': {dots: [vacation, massage, workout], selected: true},
          '2020-11-03': {dots: [vacation, massage, workout]},
          '2020-11-04': {dots: [vacation, massage, workout]},
          '2020-11-26': {dots: [vacation, massage, workout]},
          '2020-11-26': {dots: [vacation, massage, workout]},
          '2020-11-26': {dots: [vacation, massage, workout]},
          '2020-11-26': {dots: [vacation, massage, workout]},
          '2020-11-26': {dots: [vacation, massage, workout]},
          '2020-11-26': {dots: [vacation, massage, workout]},
        }}
        markingType={'multi-dot'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 15,
    height: 15,
  },
  stage: {
    backgroundColor: '#EFEFF4',
    paddingBottom: 20,
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 10,
    padding: 7,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export {CopiesCalendar};
