import React, { useEffect, useState } from 'react';
import SingleComment from './SingleComment/SingleComment';

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <SingleComment comment={comment} key={comment.id}></SingleComment>
      ))}
    </div>
  );
};

export default Comments;
