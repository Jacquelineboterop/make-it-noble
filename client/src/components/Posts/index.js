import React, { useState } from 'react';
import Post from '../Post';
import './styles.css'

function Posts() {
  return  (
    <div className="post-grid-container">
      <div className="post-grid-item1">
        <Post/>
      </div>
      <div className="post-grid-item2">
        <Post/>
      </div>
      <div className="post-grid-item3">
        <Post/>
      </div>
      <div className="post-grid-item4">
        <Post/>
      </div>
      <div className="post-grid-item5">
        <Post/>
      </div>
      <div className="post-grid-item6">
        <Post/>
      </div>
      <div className="post-grid-item7">
        <Post/>
      </div>
      <div className="post-grid-item8">
        <Post/>
      </div>
    </div>
  )
}

export default Posts;
