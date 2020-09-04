import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';
import { Container } from '@material-ui/core';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <Container maxWidth='sm'>
      {posts.map((post) => (
        // <li>{post.title}</li>
        <SinglePost post={post}></SinglePost>
      ))}
    </Container>
  );
};

export default Posts;
