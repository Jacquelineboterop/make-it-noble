import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../Post';
import './styles.css';
import Boton from '../Boton';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    async function loadPosts() {
      const {posts} = await axios({
        url: 'http://localhost:3000/posts/',
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => response.data);
      setPosts([...posts, ...posts]);
    }
    loadPosts();
  }, [])

  return (
    <div className="post-grid-container">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      <Boton></Boton>
    </div>
  );
}

export default Posts;
