import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import User from './User';
import Posts from './Posts';
import {useUser} from '../providers/UsersProvider';
import {ScrollView} from 'react-native';
import PostPage from './PostPage';
import AddComment from './AddComment';

const Users = () => {
  const users = useUser();
  return (
    <ScrollView>
      {users.map(user => (
        <User key={user.id} {...user} />
      ))}
    </ScrollView>
  );
};

export default function UsersStackScreen() {
  const UsersStack = createStackNavigator();
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name="Users" component={Users} />
      <UsersStack.Screen name="Posts" component={Posts} />
      <UsersStack.Screen name="Post Detail" component={PostPage} />
      <UsersStack.Screen name="Add Comment" component={AddComment} />
    </UsersStack.Navigator>
  );
}
