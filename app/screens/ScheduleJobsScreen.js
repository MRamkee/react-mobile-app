import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {DeviceCharts} from './DeviceCharts';
import {JobsTable} from './JobsTable';

const ScheduleJobsScreen = ({navigation}) => {
  return (
    <>
      <DeviceCharts />
      <ScrollView style={styles.scrollView}>
        <JobsTable navigation={navigation} />
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

export {ScheduleJobsScreen};
