import { useEffect, useState } from "react";
import { usePost } from "../hooks/usePost";
import { Comment } from "../types";
import CommentItem from "./CommentItem";

function CommentList() {
  const { selectedPostId } = usePost();

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
