import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlogList from './BlogList'
import ProjectList from './ProjectList'
import About from '../components/About'
import Home from '../components/Home'
import Post from '../components/Post'

function MainBody() {
  
  let dispatch = useDispatch()
  return (
    <div className="main_body">
      <BlogList/>
      <ProjectList/>
      <Post />
      <About/>
      <Home />
    
    </div>
  );
}

export default MainBody;