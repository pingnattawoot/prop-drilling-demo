import { useState, useEffect } from "react";
import { Post, Comment } from "./types";
import PostList from "./components/PostList";
import CommentList from "./components/CommentList";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    // Fetch posts
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    // Fetch comments when a post is selected
    if (selectedPostId) {
      fetch(`http://localhost:3000/comments?postId=${selectedPostId}`)
        .then((res) => res.json())
        .then((data) => setComments(data));
    }
  }, [selectedPostId]);

  return (
    <div className="app">
      <h1>Blog Posts</h1>
      <div className="content">
        <PostList posts={posts} onSelectPost={setSelectedPostId} />
        {selectedPostId && <CommentList comments={comments} />}
      </div>
    </div>
  );
}

export default App;
