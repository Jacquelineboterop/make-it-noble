import React, { useState } from 'react';
import Post from '../Post';
import './styles.css'

const posts = [
  {
    author: 'July Braum',
    date: '2017-07-01',
    content: 'Lorem Ipsum is imply a dummy text 111'
  },
  {
    author: 'Fred',
    date: '2017-07-02',
    content: 'Lorem Ipsum is imply a dummy text 222'
  },
  {
    author: 'Bob',
    date: '2017-07-03',
    content: 'Lorem Ipsum is imply a dummy text 333'
  },
  {
    author: 'Link',
    date: '2017-07-04',
    content: 'Lorem Ipsum is imply a dummy text 444'
  },
  {
    author: 'July Braum',
    date: '2017-07-01',
    content: 'Lorem Ipsum is imply a dummy text 555'
  },
  {
    author: 'Fred',
    date: '2017-07-02',
    content: 'Lorem Ipsum is imply a dummy text 666'
  },
  {
    author: 'Bob',
    date: '2017-07-03',
    content: 'Lorem Ipsum is imply a dummy text 777'
  },
  {
    author: 'Link',
    date: '2017-07-04',
    content: 'Lorem Ipsum is imply a dummy text 888'
  },
]

function Posts() {
  return  (
    <div className="post-grid-container">
      {posts.map((post, index) => (
        <Post key={index} />
      ))}
    </div>
  )
}

export default Posts;
