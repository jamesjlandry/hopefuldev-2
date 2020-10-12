import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { BACKEND_URL } from '../constants'
import {  EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


// this form creates a new post using current date time to add to the content. It currently only uses plain text, would like to add rich text component.
// user information must be present to create posts. 
function NewPost() {
    const dispatch = useDispatch() 
    const user = useSelector(state => state.currentUser) 
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [editorState, setEditorState] = useState(
      () => EditorState.createEmpty(),
    );

     const generateDate = () => {
      const now = new Date();
      const options = { month: "long", day: "numeric", year: "numeric" };
  
      const year = now.getFullYear();
  
      let month = now.getMonth() + 1;
      if (month < 10) {
        month = `0${month}`;
      }
  
      let day = now.getDate();
      if (day < 10) {
        day = `0${day}`;
      }
  
      return {
        formatted: `${year}-${month}-${day}`,
        pretty: now.toLocaleDateString("en-US", options)
      };
    };

    const submitPost = (e) => {
      e.preventDefault();
      const date = generateDate();
      const newPost = {
        title: title,
        date_formatted: date.formatted,
        date_pretty: date.pretty,
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        user_id: user.id
      };
      createPost(newPost)
       
    };

      let createPost = async (post) => {
        let response = await fetch(`${BACKEND_URL}/posts`, {
            credentials: 'include',
            method: "POST",
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        let newPost = await response.json()
         dispatch({type: "ADD_POST", post: newPost})
         }

   
     

  return (
    <div className='page_background_blur'>
    <div className='post_form'>
      <button type='button' onClick={() => dispatch({type: 'NEW_BLOG_FALSE'})}>
         Close Form
       </button>
      
       <form onSubmit={event => submitPost(event)}>
         <div className="blog_title" >
          <div>
           
          </div>
          <input
            placeholder="title"
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
            editorState={editorState} 
            onEditorStateChange={setEditorState} 
            wrapperClassName="rich-editor demo-wrapper"
            editorClassName="demo-editor"
            placeholder="Write something"
          />
          {/* <textarea
            placeholder='Write some stuff'
            id="content"
            type="text"
            value={content}
            onChange={({ target: { value } }) => {
              setContent(value);
            }}
            /> */}
          </div>
          
          <button type="submit">Make It So</button>
        </form>
    </div>
    </div>
  );
}

export default NewPost;