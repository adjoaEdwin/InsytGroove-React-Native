import React, {createContext, useContext, useReducer, useMemo} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {signup} from '../services/api';

const AuthContext = createContext();

function reducer(prevState, action) {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
}

function AuthProvider({children}) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        signup(data);
        dispatch({type: 'SIGN_IN', token: data});
      },
      handleSignOut: async () => {
        await AsyncStorage.clear();
        dispatch({type: 'SIGN_OUT'});
      },
      bootstrapAsync: async () => {
        let userToken;

        try {
          userToken = await AsyncStorage.getItem('esokoUser');
        } catch (e) {
          // Restoring token failed
        }
        dispatch({type: 'RESTORE_TOKEN', token: userToken});
      },
    }),
    [],
  );
  return (
    <AuthContext.Provider value={{state, authContext}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (typeof context === undefined) {
    throw new Error('useAuth must be used within a provider');
  }

  return context;
}

export {AuthProvider, useAuth};
