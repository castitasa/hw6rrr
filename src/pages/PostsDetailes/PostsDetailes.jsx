import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import fetchDetailesPosts from '../../store/creators/fetchDetailesPosts';
import { useSelector, useDispatch } from 'react-redux';
import classes from './PostsDetailes.module.css'

const PostsDetailes = () => {
  const { details, errorPost } = useSelector((state) => state.PostSlice)
  const { id } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDetailesPosts(id))
  }, [dispatch]);

  return (
    <div>
      {details.id ?
        <div>
          {errorPost && <div className={classes.error}>
                <div className={classes.page_404}>
                    <p>404</p>
                    <span>{errorPost}</span>
                </div>
            </div>}
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