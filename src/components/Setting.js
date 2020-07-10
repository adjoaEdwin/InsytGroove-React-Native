import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import {useAuth} from '../providers/AuthProvider';

const Setting = () => {
  const {authContext} = useAuth();
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={authContext.handleSignOut} />
    </View>
  );
};

export default function SettingScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Profile" component={Setting} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 15,
  },
});
