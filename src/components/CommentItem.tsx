import { Comment } from "../types";

interface CommentItemProps {
  comment: Comment;
}

function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="comment-item">
      <p>
        <strong>{comment.author}</strong>
      </p>
      <p>{comment.content}</p>
    </div>
  );
}

export default CommentItem;
