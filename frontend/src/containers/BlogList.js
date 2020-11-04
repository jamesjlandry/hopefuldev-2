import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { EditorState, ContentState } from 'draft-js';
import PostSnipCard from '../components/PostSnipCard';


function BlogList() {
    const showBlogList = useSelector(state => state.showBlogList)
    const posts = useSelector(state => state.posts)
    const sortedPosts = posts.sort((a,b) => b.id - a.id);
    
  return (
    <div >
     {showBlogList ?
    <div className='blog_container'>
        {sortedPosts.map(post => <PostSnipCard key={post.id} post={post}/>)}
      </div> 
    :
    null
    }
    </div>
  );
}

export default BlogList;