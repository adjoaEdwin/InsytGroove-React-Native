import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

const Comment = ({body}) => {
  return (
    <View style={{padding: 10}}>
      <Text>Andy Murray commented: {body}</Text>
    </View>
  );
};

export default Comment;
