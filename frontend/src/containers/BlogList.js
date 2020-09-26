import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


function BlogList() {
    const showBlogList = useSelector(state => state.showBlogList)
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

  return (
    <div >
     {showBlogList ?
    <div className='blog_container'>
        {posts.map(post => (
        <div className='blog_snip' key={post.id}>
          <div className='blog_date'>
            {post.date_pretty}
          </div>
          <div>
            {post.title}
          </div>
          <div className='blog_snip_paragraph'>
            {post.content.substring(0, 200)}...
          </div>
          <div className='read_more' onClick={()=> dispatch({type: 'SHOW_POST', currentPost: post})}>Read More -</div>
        </div>)
        )}
    </div> 
    :
    null
    }
    </div>
  );
}

export default BlogList;