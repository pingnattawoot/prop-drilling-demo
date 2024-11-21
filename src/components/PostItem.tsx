import { useContext } from "react";
import { Post } from "../types";
import { PostContext } from "../contexts/PostContext";
import AuthorInfo from "./AuthorInfo";

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  const context = useContext(PostContext);
  if (!context) throw new Error("PostItem must be used within a PostProvider");
  const { setSelectedPostId, selectedPostId } = context;

  const isSelected = selectedPostId === post.id;

  return (
    <div
      className={`post-item ${isSelected ? "selected" : ""}`}
      onClick={() => setSelectedPostId(post.id)}
    >
      <h2>{post.title}</h2>
      <AuthorInfo post={post} />
      <p>{post.content}</p>
    </div>
  );
}

export default PostItem;
