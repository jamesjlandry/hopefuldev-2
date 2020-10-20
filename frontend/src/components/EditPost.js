import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { BACKEND_URL } from '../constants'
import {  EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function EditPost() {

  const loggedIn = useSelector(state => state.loggedIn)
  const user = useSelector(state => state.currentUser) 
  const currentPost = useSelector(state => state.currentPost)
  const dispatch = useDispatch()
  const [title, setTitle] = useState(currentPost.title)
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  let selectedPost = EditorState.createWithContent(convertFromRaw(JSON.parse(currentPost.content)))

 const submitPost = (e, currentPost) => {
    e.preventDefault();
    const updatedPost = {
      title: title,
      
      content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      user_id: user.id
    };
    editPost(updatedPost, currentPost)
     
  };

  let editPost = async (post, currentPost) => {
    let response = await fetch(`${BACKEND_URL}/posts/${currentPost.id}`, {
        credentials: 'include',
        method: "PATCH",
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    let updatedPost = await response.json()
     dispatch({type: "UPDATE_POST", post: updatedPost})
     }

    let deletePost = async (currentPost) => {
      let response = await fetch(`${BACKEND_URL}/posts/${currentPost.id}`, {
          credentials: 'include',
          method: "DELETE",
          headers: {
              accept: 'application/json',
              'content-type': 'application/json'
          },
          body: JSON.stringify(currentPost)
      })
      let result = await response.json()
      if (result === 'success') {
       dispatch({type: "DELETE_POST", post: currentPost
       })
      } else {
        alert("post not deleted")
      }
    }
  
  return (
   <div>
     {loggedIn ?
      <div className='page_background_blur'>
        
      <div className='post_form'>
        <button type='button' onClick={() => dispatch({type: 'EDIT_BLOG_FALSE'})}>
           Changed My Mind, Close Form
         </button>
         <form onSubmit={event => submitPost(event, currentPost)}>
           <div className="blog_title" >
            <div>
             
            </div>
            <input
              
              id="title-field"
              type="text"
              value={title}
              onChange={({ target: { value } }) => {
                setTitle(value);
              }}
            />
            </div>
            <div className="blog_content">
              <div>
           
            </div>
            <Editor 
            
            defaultEditorState={selectedPost} 
            onEditorStateChange={setEditorState} 
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
            </div>
            <button type="submit">Make It So</button>
            <button type="button" onClick={()=> deletePost(currentPost)}>Delete this sucker</button>
          </form>
      </div>
      </div>
    : 
        null
    }
     
    </div>
  );
}

export default EditPost;