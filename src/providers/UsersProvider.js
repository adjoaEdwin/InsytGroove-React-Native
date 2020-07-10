import React, {createContext, useState, useContext} from 'react';
import {AllUsers} from '../users';

const UserContext = createContext();

function UserProvider({children}) {
  const [users, setUsers] = useState(AllUsers);

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
