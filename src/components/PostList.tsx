import { usePost } from "../hooks/usePost";
import PostItem from "./PostItem";

function PostList() {
  const { posts } = usePost();

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
