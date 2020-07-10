import React from 'react';
import Post from './Post';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import AllComments from './Comments';

const PostPage = ({route, navigation}) => {
  const {id} = route.params;

  return (
    <>
      {route.params && <Post {...route.params} />}
      <View style={{margin: 15}}>
        <AllComments id={id} />
        <Button
          containerStyle={{marginTop: 60}}
          title="Add a comment"
          onPress={() => navigation.navigate('Add Comment', {id})}
        />
      </View>
    </>
  );
};

export default PostPage;
