import { ReactNode, createContext, useEffect, useState } from "react";

interface Post {
  title: string;
  number: number;
  update_at: Date;
  body: string;
}

interface PostContextType {
  posts: Post[];
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  async function getPosts() {
    const response = await fetch('https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge');
    const data = await response.json();
    console.log(data);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newPosts = data.items.map((item: any) => {
        const { title, number, update_at, body } = item;
        console.log({ title, number, update_at, body });
        return { title, number, update_at, body };
    });
    
    setPosts([...newPosts]);
  }

  useEffect(() => {
    getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <PostContext.Provider value={{posts}}>
      { children }
    </PostContext.Provider>
  )
}