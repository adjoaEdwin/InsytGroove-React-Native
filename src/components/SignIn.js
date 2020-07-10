import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {useAuth} from '../providers/AuthProvider';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {authContext} = useAuth();

  const handleSignIn = () => {
    authContext.signIn({username, password});
  };

  return (
    <View style={styles.container}>
      <Text h4>Sign In</Text>
      <Input
        placeholder="username"
        value={username}
        onChangeText={username => setUsername(username)}
      />
      <Input
        placeholder="password"
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <Button title="Sign In" type="solid" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default SignIn;
