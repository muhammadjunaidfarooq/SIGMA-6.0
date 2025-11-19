import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";
export default function Comment() {
  let [comments, setComments] = useState([{
    userName: "@jf",
    remarks: "Great Job!",
    rating: 5,
  }]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
    console.log("added")
  };

  return (
    <div>
      <h3>All Comments</h3>
      <div className="comments">
      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <i>{comment.remarks}</i> &nbsp;&nbsp;&gt;&nbsp;&nbsp;
          <span>Rating:{comment.rating}</span> <br />
          -&nbsp;{comment.userName}
        </div>
      ))}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </div>
  );
}
