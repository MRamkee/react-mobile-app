import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {Card} from 'react-native-elements';

const DashboardScreen = ({navigation}) => {
  return (
    <View style={styles.viewColumn}>
      <View style={styles.viewRow}>
        <View style={styles.container}>
          <Card
            containerStyle={{
              backgroundColor: '#5d4564',
              borderWidth: 0,
            }}>
            <TouchableHighlight onPress={() => navigation.navigate('Copies')}>
              <Image
                style={styles.imagestyle}
                source={require('../assets/backup.png')}
              />
            </TouchableHighlight>
            <Text style={{textAlign: 'center', color: 'white'}}>Copies</Text>
          </Card>
        </View>
        <View style={styles.container}>
          <Card
            containerStyle={{
              backgroundColor: '#f7886a',
              borderWidth: 0,
            }}>
            <TouchableHighlight onPress={() => navigation.navigate('Events')}>
              <Image
                style={styles.imagestyle}
                source={require('../assets/jobs.png')}
              />
            </TouchableHighlight>
            <Text style={{textAlign: 'center', color: 'white'}}>Jobs</Text>
          </Card>
        </View>
      </View>
      <View style={styles.viewRow}>
        <View style={styles.container}>
          <Card
            containerStyle={{
              backgroundColor: '#00a47e',
              borderWidth: 0,
            }}>
            <TouchableHighlight onPress={() => navigation.navigate('Events')}>
              <Image
                style={styles.imagestyle}
                source={require('../assets/device.png')}
              />
            </TouchableHighlight>
            <Text style={{textAlign: 'center', color: 'white'}}>Devices</Text>
          </Card>
        </View>
        <View style={styles.container}>
          <Card
            containerStyle={{
              backgroundColor: '#425563',
              borderWidth: 0,
            }}
            style={{elevate: 0}}>
            <TouchableHighlight onPress={() => navigation.navigate('Events')}>
              <Image
                style={styles.imagestyle}
                source={require('../assets/events.png')}
              />
            </TouchableHighlight>
            <Text style={{textAlign: 'center', color: 'white'}}>Events</Text>
          </Card>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewColumn: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#80746e',
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
  },
  imagestyle: {
    width: 80,
    height: 80,
    marginLeft: 35,
  },
});

export default DashboardScreen;
