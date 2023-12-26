import React from 'react';
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Posts, PostsDetailes, Navbar } from './pages';


const App = () => {
    return (
        <Router>
        <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/posts/:id' element={<PostsDetailes/>}/>
        </Routes>
        </Router>
    );
}

export default App;

// import { Suspense, lazy } from 'react';
// const PostsDetailesLazy = lazy(() => import('./pages/PostsDetailes/PostsDetailes'));

//  function getshortvalue(body) {
//   if (body.length > 20) {
//      return body.substring(0, 20) + '...';
//   }
//   return body;
//  }


 {/* <Route path='/' element={<Posts />}></Route>
        <Route path='/posts'  
        element={
        <Suspense fallback={<div>loading...</div>}>
          <PostsDetailesLazy/>
        </Suspense>
    }
    ></Route>
    <Route path='/posts:id' element={<PostsDetailes />} /> */}