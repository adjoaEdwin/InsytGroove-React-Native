import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card, Button} from 'react-native-elements';

const User = ({id, name, email}) => {
  const navigation = useNavigation();
  return (
    <Card title="CARD WITH DIVIDER">
      <View>
        <Image
          resizeMode="cover"
          source={{uri: `https://robohash.org/${id}?200x200`}}
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
});

export default User;
