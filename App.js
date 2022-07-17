import React from 'react';
import {StyleSheet, Button, Text} from 'react-native';
import LandingScreen from './app/screens/LandingScreen';
import ActivityDashboardScreen from './app/screens/ActivityDashboardScreen';
import {ScheduleJobsScreen} from './app/screens/ScheduleJobsScreen';
import {CopiesScreen} from './app/screens/copies/CopiesScreen';
import {RecentWarningDetails} from './app/screens/RecentWarningDetails';
import DashboardScreen from './app/screens/DashboardScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const ActivityStack = createStackNavigator();
const ScheduleStack = createStackNavigator();
const RecentWarningStack = createStackNavigator();
const CopiesStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomeStack"
      component={LandingScreen}
      options={{
        title: 'Home',
      }}
    />
  </HomeStack.Navigator>
);

const DashboardStackScreen = ({navigation}) => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen
      name="DashboardStack"
      component={DashboardScreen}
      options={{
        title: 'Dashboard',
        headerLeft: () => (
          <Icon
            style={{marginLeft: 5}}
            name="bars"
            size={25}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </DashboardStack.Navigator>
);

const ActivityStackScreen = ({navigation}) => (
  <ActivityStack.Navigator>
    <ActivityStack.Screen
      name="ActivityStack"
      component={ActivityDashboardScreen}
      options={{
        title: 'Events',
        headerLeft: () => (
          <Icon
            style={{marginLeft: 5}}
            name="bars"
            size={25}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ActivityStack.Navigator>
);

const ScheduleStackScreen = ({navigation}) => (
  <ScheduleStack.Navigator>
    <ScheduleStack.Screen
      name="ScheduleStack"
      component={ScheduleJobsScreen}
      options={{
        title: 'Schedule Jobs',
        headerLeft: () => (
          <Icon
            style={{marginLeft: 5}}
            name="bars"
            size={25}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ScheduleStack.Navigator>
);

const CopiesStackScreen = ({navigation}) => (
  <CopiesStack.Navigator>
    <CopiesStack.Screen
      name="CopiesStack"
      component={CopiesScreen}
      options={{
        title: 'Copies',
        headerLeft: () => (
          <Icon
            style={{marginLeft: 5}}
            name="bars"
            size={25}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </CopiesStack.Navigator>
);

const RecentStackScreen = ({navigation}) => (
  <RecentWarningStack.Navigator>
    <RecentWarningStack.Screen
      name="RecentStack"
      component={RecentWarningDetails}
      options={{
        title: 'Recent Warnings',
        headerLeft: () => (
          <Icon
            style={{marginLeft: 5}}
            name="bars"
            size={25}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </RecentWarningStack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Dashboard" component={DashboardStackScreen} />
      <Drawer.Screen name="Copies" component={CopiesStackScreen} />
      <Drawer.Screen name="Events" component={ActivityStackScreen} />
      <Drawer.Screen name="Schedule Jobs" component={ScheduleStackScreen} />
      <Drawer.Screen name="Alerts" component={RecentStackScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
