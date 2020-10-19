import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'


function AdminBlogList() {

  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()



  return (
    <div className='admin_blog_container'> 
      {posts.map(post => (
      <div >
        <div>
          {post.title}
        </div>
        <div className='blog_snip'>
          <p>
            {post.content.substring(0, 200)}...
          </p>
          <button type='button' onClick={()=> dispatch({type: "EDIT_CURRENT_POST", currentPost: post})}>Edit Post</button>
         
        </div>
      </div>)
      )}
     
    </div>
  );
}

export default AdminBlogList;