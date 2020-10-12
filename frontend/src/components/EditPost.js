import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { BACKEND_URL } from '../constants'


function EditPost() {

  const loggedIn = useSelector(state => state.loggedIn)
  const user = useSelector(state => state.currentUser) 
  const currentPost = useSelector(state => state.currentPost)
  const dispatch = useDispatch()
  const [title, setTitle] = useState(currentPost.title)
  const [content, setContent] = useState(currentPost.content)

  

 const submitPost = (e, currentPost) => {
    e.preventDefault();
    const updatedPost = {
      title: title,
      
      content: content,
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

  // I would like to abstract the New Post and Edit Post form to be the same form so I am not repeating my work.

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
            <textarea
              id="content"
              type="text"
              value={content}
              onChange={({ target: { value } }) => {
                setContent(value);
              }}
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