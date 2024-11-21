import "./App.css";
import CommentList from "./components/CommentList";
import PostList from "./components/PostList";
import { PostProvider } from "./contexts/PostContext";

function App() {
  return (
    <PostProvider>
      <div className="app">
        <h1>Blog Posts</h1>
        <div className="content">
          <PostList />
          <CommentList />
        </div>
      </div>
    </PostProvider>
  );
}

export default App;
