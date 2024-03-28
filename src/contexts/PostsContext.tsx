import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Post {
  title: string;
  number: number;
  updated_at: string;
  body: string;
}

interface PostContextType {
  posts: Post[];
  fetchPosts: (query ?: string) => Promise<void>;
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  async function fetchPosts(query = '') {
    const response = await api.get('/search/issues', {
      params: {
        q:`${query} repo:AndersonPAlmeida/github-blog`,
        
      }
    })
    const data = await response.data;
    
    if(query) {
      console.log(query);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newPosts = data.items.map((item: any) => {
        const { title, number, updated_at, body } = item;
        return { title, number, updated_at, body };
        
    });
    
    setPosts([...newPosts]);
  }

  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <PostContext.Provider value={{
      posts,
      fetchPosts
    }}>
      { children }
    </PostContext.Provider>
  )
}