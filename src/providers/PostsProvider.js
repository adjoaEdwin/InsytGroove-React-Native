import React, {createContext, useState, useContext} from 'react';
import {AllPosts} from '../posts';

const PostContext = createContext();

function PostProvider({children}) {
  const [posts, setPosts] = useState(AllPosts);

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
