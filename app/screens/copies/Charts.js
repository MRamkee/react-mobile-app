import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  Button,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const CopiesCharts = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const pieChartData = [
    {
      name: 'Snapshots',
      population: 35,
      color: '#2AD2C9',
      legendFontColor: '#2AD2C9',
      legendFontSize: 15,
    },
    {
      name: 'Remote Snapshots',
      population: 20,
      color: '#1973CB',
      legendFontColor: '#1973CB',
      legendFontSize: 15,
    },
    {
      name: 'Peer Copy Snapshots',
      population: 5,
      color: '#665F84',
      legendFontColor: '#665F84',
      legendFontSize: 15,
    },
    {
      name: 'Express Protect Copies',
      population: 20,
      color: '#ff8d6d',
      legendFontColor: '#ff8d6d',
      legendFontSize: 15,
    },
    {
      name: 'Catalyst Copies',
      population: 9,
      color: '#005265',
      legendFontColor: '#005265',
      legendFontSize: 15,
    },
  ];

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [300, 400, 100, 250, 98, 25],
      },
    ],
  };

  const chartConfig = {
    backgroundColor: 'blue',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
      borderTopLeftRadius: 30,
      padding: 20,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <>
      <View onPress={() => setModalVisible(true)}>
        <Text> </Text>
        <Text>COPIES (Last Week)</Text>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Copies details will be displaye here
              </Text>

              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#2196F3'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <PieChart
          data={pieChartData}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
    </>
  );
};
export {CopiesCharts};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 40,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
