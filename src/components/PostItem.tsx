import { Post } from "../types";
import AuthorInfo from "./AuthorInfo";

interface PostItemProps {
  post: Post;
  onSelectPost: (postId: number) => void;
  showAuthorInfo?: boolean;
}

function PostItem({ post, onSelectPost, showAuthorInfo }: PostItemProps) {
  return (
    <div className="post-item" onClick={() => onSelectPost(post.id)}>
      <h2>{post.title}</h2>
      {showAuthorInfo && <AuthorInfo post={post} />}
      <p>By: {post.author}</p>
      <p>{post.content}</p>
    </div>
  );
}

export default PostItem;
