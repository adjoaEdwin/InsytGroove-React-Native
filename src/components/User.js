import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card, Button} from 'react-native-elements';

const User = ({id, name, email}) => {
  const navigation = useNavigation();
  return (
    <Card>
      <View style={styles.conatiner}>
        <Image
          style={styles.avatar}
          resizeMode="contain"
          source={require('assets/images/user-profile.jpg')}
        />
        <View style={styles.name}>
          <Text>{name}</Text>
          <Text>{email}</Text>
        </View>
        <Button
          title="View Posts"
          onPress={() => navigation.navigate('Posts')}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  name: {
    padding: 5,
  },
  conatiner: {
    padding: 10,
  },
  avatar: {
    width: 66,
    height: 58,
  },
});

export default User;
