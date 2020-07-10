import React, {createContext, useState, useEffect, useContext} from 'react';
import {getPostByUserId} from '../services/api';

const PostContext = createContext();

function PostProvider({children}) {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const {data} = await getPostByUserId(1);
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
}

function usePost() {
  const context = useContext(PostContext);
  if (typeof context === undefined) {
    throw new Error(`useUser must be used within a provider`);
  }
  return context;
}

export {usePost, PostProvider};
