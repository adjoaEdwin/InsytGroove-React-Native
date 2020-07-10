import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useAuth} from '../providers/AuthProvider';

export default function Splashscreen() {
  const {authContext} = useAuth();

  useEffect(() => {
    authContext.bootstrapAsync();
  });
  return (
    <View style={styles.container}>
      <Text>Loading ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
