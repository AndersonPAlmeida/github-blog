import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import RemoveMarkdown from "remove-markdown";

interface Post {
  title: string;
  number: number;
  updated_at: string;
  body: string;
  html_url: string;
}

interface PostContextType {
  post: Post;
  posts: Post[];
  fetchPosts: (query ?: string) => Promise<void>;
  fetchPost: (query ?: number) => Promise<void>;
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [post, setPost] = useState<Post>({} as Post)

  async function fetchPosts(query = '') {
    const response = await api.get('/search/issues', {
      params: {
        q:`${query} repo:AndersonPAlmeida/github-blog`,  
      }
    })
    const data = await response.data;
    
    const newPosts = data.items.map((item: Post) => {
      const { title, number, updated_at, body, html_url } = item;
      const contentPost = RemoveMarkdown(body).replace(/\s/g, " ").replace(/\s$/, "");

      return { title, number, updated_at, body: contentPost, html_url };
    });
    
    setPosts([...newPosts]);
  }

  async function fetchPost(query = 0) {
    const response = await api.get(`/repos/AndersonPAlmeida/github-blog/issues/${query}`);
    const data = await response.data;

    const { title, number, updated_at, body, html_url} = data;

    setPost({title, number, updated_at, body, html_url});
  }

  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <PostContext.Provider value={{
      post,
      posts,
      fetchPosts,
      fetchPost
    }}>
      { children }
    </PostContext.Provider>
  )
}