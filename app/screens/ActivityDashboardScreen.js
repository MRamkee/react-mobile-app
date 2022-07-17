import React from 'react';
import {StyleSheet, View} from 'react-native';
import DeviceCarousel from './activity/DeviceCarousel';
import EventListScreen from './activity/EventListScreen';
import UserEventsScreen from './activity/UserEventsScreen';

const ActivityDashboardScreen = () => {
  const images = [
    {
      src: require('../assets/carouse_nimble.png'),
      recentSuccess: '28th Oct 2020',
      execStatus: '50 Jobs executed.',
    },
    {
      src: require('../assets/carouse_3par.png'),
      recentSuccess: '27th Oct 2020',
      execStatus: '150 Jobs executed.',
    },
    {
      src: require('../assets/carouse_primera.png'),
      recentSuccess: '29th Oct 2020',
      execStatus: '220 Jobs executed.',
    },
  ];
  return (
    <View style={styles.app}>
      <DeviceCarousel images={images} />
      <EventListScreen />
      <UserEventsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500,
  },
});

export default ActivityDashboardScreen;
