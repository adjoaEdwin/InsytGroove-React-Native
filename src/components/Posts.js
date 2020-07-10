import React from 'react';
import {ScrollView} from 'react-native';
import {usePost} from '../providers/PostsProvider';
import Post from './Post';

const Posts = () => {
  const posts = usePost();
  return (
    <ScrollView>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </ScrollView>
  );
};

export default Posts;
