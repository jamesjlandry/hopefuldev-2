import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdminPostSnipCard from '../components/AdminPostSnipCard'


function AdminBlogList() {

  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()



  return (
    
    <div className='admin_blog_container'>
        {posts.map(post => <AdminPostSnipCard post={post}/>)}
      </div> 
  );
}

export default AdminBlogList;