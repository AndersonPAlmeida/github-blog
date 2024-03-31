import { ReactNode, createContext, useState } from "react";
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
  loading: boolean;
  searchPostApi: (query ?: number) => Promise<void>;
  searchPostsApi: (query ?: string) => Promise<void>;
  loadingPage: () => void;
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [post, setPost] = useState<PostProps>({} as PostProps)
  const [errorMessage, setErrorMessage] = useState<ErrorMessageProps>({} as ErrorMessageProps)
  const [loading, setLoading] = useState(true);

  async function searchPostsApi(query = '') {
    try {
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
      setErrorMessage({message: ""})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      let message = "Não foi possível encontrar o(s) post(s)."
      
      if(error?.response.status === 404) {
        message = "Não foi possível encontrar post com essa descrição."
      }

      setErrorMessage({message: message})
    }
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

  function loadingPage() {
    setLoading(true)

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <PostContext.Provider value={{
      post,
      posts,
      loading,
      errorMessage,
      searchPostsApi,
      searchPostApi,
      loadingPage
    }}>
      { children }
    </PostContext.Provider>
  )
}