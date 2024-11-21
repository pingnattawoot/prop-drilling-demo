import { usePost } from "../hooks/usePost";
import { Post } from "../types";
import AuthorInfo from "./AuthorInfo";

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  const { setSelectedPostId, selectedPostId } = usePost();

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
