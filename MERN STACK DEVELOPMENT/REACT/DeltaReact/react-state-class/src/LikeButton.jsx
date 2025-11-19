import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [count, setCount] = useState(0);
  let toggleLike = () => {
    setIsLiked(!isLiked);
    setCount(count + 1);
  };

  return (
    <div>
      <p>Clicks: {count}</p>
      <p style={{ cursor: "pointer" }} onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
 