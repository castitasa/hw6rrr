import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import fetchDetailesPosts from '../../store/creators/fetchDetailesPosts';
import { useSelector, useDispatch } from 'react-redux';

const PostsDetailes = () => {
  const { details } = useSelector((state) => state.PostSlice)
  const { id } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDetailesPosts(id))
  }, []);

  return (
    <div>
      {details.id ?
        <div>
          <Link to={'/'}>Back</Link>
          <h1>{details.body}</h1>
          <h1>{details.id} </h1>
          <h2>{details.title}</h2>
        </div>
        : ''
      }
    </div>
  );
}

export default PostsDetailes;