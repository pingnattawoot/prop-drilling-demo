import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import PostItem from "./PostItem";

function PostList() {
  const context = useContext(PostContext);
  if (!context) throw new Error("PostList must be used within a PostProvider");
  const { posts } = context;

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
