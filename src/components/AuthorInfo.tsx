import { Post } from "../types";

interface AuthorInfoProps {
  post: Post;
}

function AuthorInfo({ post }: AuthorInfoProps) {
  return (
    <div className="author-info">
      <h3>Author Details</h3>
      <p>Name: {post.author}</p>
      <p>Posted on: {new Date(post.timestamp).toLocaleDateString()}</p>
    </div>
  );
}

export default AuthorInfo;
