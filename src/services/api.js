import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const requestsUsers = () =>
  axios.get('https://jsonplaceholder.typicode.com/users');

export const requestsComments = id =>
  axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

export const requestsPosts = () =>
  axios.get('https://jsonplaceholder.typicode.com/posts');

export const getPostByUserId = id =>
  axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

export const getPostById = (userId, postId) =>
  axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts?id=${postId}`,
  );

export const getCommentsById = (userId, postId) =>
  axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/comments?postId=${postId}`,
  );

export const signup = ({username, password}) => {
  AsyncStorage.setItem('esokoUser', JSON.stringify({username, password}));
  if (username === `esoko` && password === `insyt`) {
    return setUser({
      username: `Esoko`,
      name: `Johnny`,
      email: `johnny@esoko.org`,
    });
  }
  return false;
};

export const getUser = () =>
  AsyncStorage.getItem('esokoUser')
    ? JSON.parse(AsyncStorage.getItem('esokoUser'))
    : {};
const setUser = user => AsyncStorage.setItem('esokoUser', JSON.stringify(user));

export const handleLogin = ({username, password}) => {
  if (username === `esoko` && password === `insyt`) {
    return setUser({
      username: `Esoko`,
      name: `Johnny`,
      email: `johnny@esoko.org`,
    });
  }
  return false;
};
export const isLoggedIn = () => {
  const user = getUser();
  return !!user.username;
};

export const logout = callback => {
  setUser({});
  callback();
};
