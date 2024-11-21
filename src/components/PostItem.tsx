import { Post } from '../types';

interface PostItemProps {
  post: Post;
  onSelectPost: (postId: number) => void;
}

function PostItem({ post, onSelectPost }: PostItemProps) {
  return (
    <div className="post-item" onClick={() => onSelectPost(post.id)}>
      <h2>{post.title}</h2>
      <p>By: {post.author}</p>
      <p>{post.content}</p>
    </div>
  );
}

export default PostItem;