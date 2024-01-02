import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import fetchAllPosts from '../../store/creators/fetchAllPosts';
import classes from './Posts.module.css';
const Posts = () => {
    const { posts, errorPost } = useSelector((state) => state.PostSlice)
    const dispatch = useDispatch()
    console.log(posts)
    useEffect(() => {
        dispatch(fetchAllPosts())
    }, [dispatch]);

    function Getshortvalue(word, id) {
        if (word.length > 20) {
            return (<>{word.substr(0, 20)}+''+<Link to={'/posts/' + id}>..More</Link> </>)
        } else {
            return word
        }
    }

    return (
        <div className='posts'>
            {errorPost && <div className={classes.error}>
                <div className={classes.page_404}>
                    <p>404</p>
                    <span>{errorPost}</span>
                </div>
            </div>}
            {
                posts.length !== 0 ? posts.map((item) => {
                    return (
                        <div className='post'>
                            <strong>{item.id}</strong>
                            <h1>{item.title}</h1>
                            <p>{Getshortvalue(item.body, item.id)}</p>
                            <Link to={'/posts/' + item.id}><button>detailes</button></Link>
                        </div>
                    )
                }) : <div className={classes.loading}><div className={classes.lds_ring}><div></div><div></div><div></div><div></div></div></div>
            }
        </div>
    )
};

export default Posts;



// <p>{getshortvalue(post.body)}</p>
//   function getshortvalue(body) {
//   if (body.length > 20) {
//      return body.substring(0, 20) + '...More';
//   }
//   return body;
//  }
// };