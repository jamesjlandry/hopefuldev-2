import React from 'react';
import { useSelector } from 'react-redux';
import {  Editor, EditorState, convertFromRaw } from 'draft-js';
function Post() {

  const currentPost = useSelector(state => state.currentPost)
  const showPost = useSelector(state => state.showPost)
  
  if(showPost === false) {
    return null
  }

  let editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(currentPost.content)))

  return (
    <React.Fragment>
      {
        showPost ?
    <div className='blog_container' >
      <div className={'post_title'}>
        <strong>{currentPost.title}</strong>
      </div>
      <br></br>
      <Editor 
        editorState={editorState}
        readOnly= "true"
      />
        
        
    </div>
    :
    null
      }
    </React.Fragment>
  );
}

export default Post;