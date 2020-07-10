import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from '../components/SignIn';
import {useAuth} from '../providers/AuthProvider';
import Splashscreen from '../components/SplashScreen';
import UsersStackScreen from '../components/Users';

export default function rootNavigator(props) {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {state} = useAuth();

  if (state.isLoading) {
    return <Splashscreen />;
  }

  return (
    <>
      {state.userToken ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={UsersStackScreen} {...props} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </>
  );
}
