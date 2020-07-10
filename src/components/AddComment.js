import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {createOne} from '../db/schema';
import {Comments} from '../db/constants';

const AddComment = ({route, navigation}) => {
  const [body, setBody] = useState('');

  const {id} = route.params;
  // console.log(id);

  const createComment = async () => {
    let comment = {
      uuid: Date.now().toString(),
      body,
      postId: id,
      timestamp: new Date(),
    };
    // console.log(createOne(Comments, comment));

    try {
      if (body === '') {
        Alert.alert('please enter a comment');
      }
      await createOne(Comments, comment);
      Alert.alert('Comment added');
      return navigation.goBack(1);
    } catch (error) {}
  };

  return (
    <View style={{margin: 15}}>
      <Input
        placeholder="body"
        value={body}
        onChangeText={value => setBody(value)}
      />
      <Button title="Save" onPress={createComment} />
    </View>
  );
};

export default AddComment;
