import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from '../components/SignIn';
import {useAuth} from '../providers/AuthProvider';
import Splashscreen from '../components/SplashScreen';
import UsersStackScreen from '../components/Users';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingScreen from '../components/Setting';

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
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Setting') {
                iconName = 'cog';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Home" component={UsersStackScreen} {...props} />
          <Tab.Screen name="Setting" component={SettingScreen} {...props} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Sign In" component={SignIn} />
        </Stack.Navigator>
      )}
    </>
  );
}
