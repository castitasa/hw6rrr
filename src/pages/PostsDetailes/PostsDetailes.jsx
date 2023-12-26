import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const PostsDetailes = () => {

    const [posts, setPosts] = useState([]);
    const {id} = useParams();
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/'+id)
      .then((res) => { return res.json() }).
      then((data) => {
          setPosts(data);
      })
    }, []);

    return (
      <div>
        {posts.id? 
          <div>
            <Link to={'/'}>Back</Link>
            <h1>{posts.body}</h1>
            <h1>{posts.id} </h1>
            <h2>{posts.title}</h2>
          </div>
          :''
        }
      </div>
    );
}








export default PostsDetailes;
// import { useParams, useHistory } from 'react-router-dom';

// function PostsDetailes(props) {
//     const { postId } = useParams();
//     const post = props.posts.find((post) => post.id === postId);
//     const history = useHistory();
   
//     if (!post) {
//        return <div>Loading...</div>;
//     }
   
//     return (
//        <div>
//          <h2>{post.title}</h2>
//          <p>{post.body}</p>
//          <button onClick={() => history.goBack()}>Go Back</button>
//        </div>
//     );
//    }
