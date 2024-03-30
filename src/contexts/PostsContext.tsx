import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import RemoveMarkdown from "remove-markdown";

interface PostProps {
  title: string;
  number: number;
  updated_at: string;
  body: string;
  html_url: string;
}

interface ErrorMessageProps {
  message: string;
}
interface PostContextType {
  post: PostProps;
  posts: PostProps[];
  errorMessage: ErrorMessageProps;
  fetchPosts: (query ?: string) => Promise<void>;
  searchPostApi: (query ?: number) => Promise<void>;
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [post, setPost] = useState<PostProps>({} as PostProps)
  const [errorMessage, setErrorMessage] = useState<ErrorMessageProps>({} as ErrorMessageProps)

  async function fetchPosts(query = '') {
    const response = await api.get('/search/issues', {
      params: {
        q:`${query} repo:AndersonPAlmeida/github-blog`,  
      }
    })
    const data = await response.data;
    
    const newPosts = data.items.map((item: PostProps) => {
      const { title, number, updated_at, body, html_url } = item;
      const contentPost = RemoveMarkdown(body).replace(/\s/g, " ").replace(/\s$/, "");

      return { title, number, updated_at, body: contentPost, html_url };
    });
    
    setPosts([...newPosts]);
  }

  async function searchPostApi(query = 0) {
    try {
      const response = await api.get(`/repos/AndersonPAlmeida/github-blog/issues/${query}`);
      
      const { title, number, updated_at, body, html_url} = response.data;

      setPost({title, number, updated_at, body, html_url});
      setErrorMessage({message: ""})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      let message = "Não foi possível buscar os dados do post."
      
      if(error?.response.status === 404) {
        message = "Não foi possível encontrar post com esse número."
      }

      setErrorMessage({message: message})
    }
  }

  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <PostContext.Provider value={{
      post,
      posts,
      errorMessage,
      fetchPosts,
      searchPostApi
    }}>
      { children }
    </PostContext.Provider>
  )
}