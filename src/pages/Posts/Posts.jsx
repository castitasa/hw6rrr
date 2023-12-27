import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import fetchAllPosts from '../../store/creators/fetchAllPosts';
const Posts = () => {
    const { posts } = useSelector((state) => state.PostSlice)
    const dispatch = useDispatch()
    console.log(posts)
    useEffect(() => {
        dispatch(fetchAllPosts())
    }, []);

    function Getshortvalue(word, id) {
        if (word.length > 20) {
            return (<>{word.substr(0, 20)}+''+<Link to={'/posts/' + id}>..More</Link> </>)
        } else {
            return word
        }
    }

    return (
        <div className='posts'>
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
                }) : 'loading...'
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