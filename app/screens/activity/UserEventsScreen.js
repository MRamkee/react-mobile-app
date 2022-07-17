import * as React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {StackedBarChart} from 'react-native-chart-kit';

const UserEventsScreen = () => {
  const data = {
    labels: ['Test1', 'Test2'],
    legend: ['Tier 1 Copies', 'Tier 2 Copies', 'Tier 3 Copies'],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ['#eadfea', '#b6a9bb', '#9a869f'],
  };
  const chartConfig = {
    backgroundColor: '#775e7c',
    backgroundGradientFrom: '#775e7c',
    backgroundGradientTo: '#614767',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#614767',
    },
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgray',
          justifyContent: 'center',
        }}>
        <StackedBarChart
          data={data}
          width={Dimensions.get('window').width} // from react-native
          height={230}
          chartConfig={chartConfig}
        />
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 230,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '70%',
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 20,
  },
});

export default UserEventsScreen;
