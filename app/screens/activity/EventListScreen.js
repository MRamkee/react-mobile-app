import React from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';

import {ProgressChart} from 'react-native-chart-kit';

const EventListScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const data = {
    labels: ['Completed', 'Running', 'Error'], // optional
    data: [0.2, 0.6, 0.2],
  };
  const chartConfig = {
    color: (opacity = 2) => `rgba(97, 71, 103, ${opacity})`,
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#efefef',
    backgroundGradientTo: '#efefef',
  };
  return (
    <View style={styles.container}>
      <View>
        <ProgressChart
          data={data}
          height={150}
          paddingLeft="25"
          width={screenWidth}
          strokeWidth={4}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#614767',
    alignItems: 'stretch',
  },
  stripHeader: {
    borderRadius: 30,
    padding: 30,
    width: '95%',
  },
});

export default EventListScreen;
