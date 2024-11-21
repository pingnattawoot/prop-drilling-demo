import { useState, useEffect, useContext } from "react";
import { Comment } from "../types";
import { PostContext } from "../contexts/PostContext";
import CommentItem from "./CommentItem";

function CommentList() {
  const context = useContext(PostContext);
  if (!context)
    throw new Error("CommentList must be used within a PostProvider");
  const { selectedPostId } = context;

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (selectedPostId) {
      fetch(`http://localhost:3000/comments?postId=${selectedPostId}`)
        .then((res) => res.json())
        .then((data) => setComments(data));
    } else {
      setComments([]);
    }
  }, [selectedPostId]);

  if (!selectedPostId) return null;

  return (
    <div className="comment-list">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
