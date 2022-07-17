import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const DeviceCharts = () => {
  const chartConf = {
    backgroundColor: '#FC9935', // '#e26a00',
    backgroundGradientFrom: '#FC9935', // '#fb8c00',
    backgroundGradientTo: '#a96b2c', // '#ffa726',
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
      marginHorizontal: 10,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#a96b2c',
    },
  };

  return (
    <View>
      <Text> </Text>
      <Text>JOB EXECUSION </Text>
      <LineChart
        data={{
          labels: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct'],
          datasets: [
            {
              data: [105, 200, 90, 85, 15, 250],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConf}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export {DeviceCharts};
