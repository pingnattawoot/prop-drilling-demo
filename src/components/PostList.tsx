import { Post } from "../types";
import PostItem from "./PostItem";

interface PostListProps {
  posts: Post[];
  onSelectPost: (postId: number) => void;
}

function PostList({ posts, onSelectPost }: PostListProps) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onSelectPost={onSelectPost} />
      ))}
    </div>
  );
}

export default PostList;
