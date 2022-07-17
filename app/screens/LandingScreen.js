import React from 'react';
import {
  Button,
  Alert,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceInDown"
          source={require('../assets/hpe-logos.png')}
          resizeMode="stretch"
        />
        <Animatable.Text animation="bounceInDown" style={styles.title}>
          Atlas Console
        </Animatable.Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={styles.footer}
        duration={600}>
        <Text style={styles.subTitle} animation="lightSpeedIn">
          Atlas facilitates Policy-Driven, converged data protection and copy
          data management.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.landingButton}> Get inside!</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default LandingScreen;

const {height} = Dimensions.get('screen');
const logo_height = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  footer: {
    flex: 1,
    backgroundColor: '#00b388',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 40,
    width: '100%',
  },
  logo: {
    width: 50,
    height: logo_height,
  },
  title: {
    color: '#404040',
    fontSize: 26,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  subTitle: {color: 'white', fontSize: 20},
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'gold',
  },
  headerContainer: {position: 'absolute', top: 100, alignItems: 'center'},
  landingButton: {
    // width: 100,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    padding: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});
