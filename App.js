import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {UserProvider} from './src/providers/UsersProvider';
import {PostProvider} from './src/providers/PostsProvider';

import MainApp from './src/navigation';
import {AuthProvider} from './src/providers/AuthProvider';

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <UserProvider>
          <PostProvider>
            <MainApp />
          </PostProvider>
        </UserProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
