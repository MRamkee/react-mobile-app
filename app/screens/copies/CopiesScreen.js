import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {CopiesCharts} from './Charts';
import {CopiesTable} from './CopiesTable';
import {CopiesCalendar} from './CopiesCalendar';

const CopiesScreen = ({navigation}) => {
  return (
    <>
      <CopiesCharts />
      <ScrollView style={styles.scrollView}>
        <CopiesCalendar navigation={navigation} />
        <CopiesTable navigation={navigation} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 5,
  },
  text: {
    fontSize: 12,
  },
});

export {CopiesScreen};
