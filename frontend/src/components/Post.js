import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function Post() {

  const currentPost = useSelector(state => state.currentPost)
  const showPost = useSelector(state => state.showPost)
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      {
        showPost ?
    <div className='blog_post' >
      <div>
        {currentPost.title}
      </div>
      <div>
        {currentPost.content}
      </div>
    </div>
    :
    null
      }
    </React.Fragment>
  );
}

export default Post;