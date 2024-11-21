import { createContext, ReactNode, useEffect, useState } from "react";
import { Post } from "../types";

interface PostContextType {
  posts: Post[];
  selectedPostId: number | null;
  setSelectedPostId: (id: number | null) => void;
}

export const PostContext = createContext<PostContextType | undefined>(
  undefined
);

export function PostProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    // Fetch posts
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <PostContext.Provider value={{ posts, selectedPostId, setSelectedPostId }}>
      {children}
    </PostContext.Provider>
  );
}
