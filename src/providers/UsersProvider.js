import React, {createContext, useState, useEffect, useContext} from 'react';
import {requestsUsers} from '../services/api';

const UserContext = createContext();

function UserProvider({children}) {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const {data} = await requestsUsers();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);
  if (typeof context === undefined) {
    throw new Error('useUser must be used within a provider');
  }
  return context;
}

export {useUser, UserProvider};
