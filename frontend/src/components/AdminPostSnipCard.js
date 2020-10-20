import React from 'react';
import { useDispatch } from 'react-redux';
import { EditorState,  convertFromRaw } from 'draft-js';


export default function AdminPostSnipCard (props) {
    const post = props.post
    let editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(post.content)))
    const dispatch = useDispatch()
    let postContent = editorState.getCurrentContent()
    postContent = postContent.getPlainText()
    return (
        <div>
 <div className='blog_snip' key={post.id}>
          <div className='blog_date'>
            {post.date_pretty}
          </div>
          <div>
            {post.title}
          </div>
          <div className='blog_snip_paragraph'>
            {postContent.substring(0, 200)}...
          </div>
          <button type='button' onClick={()=> dispatch({type: "EDIT_CURRENT_POST", currentPost: post})}>Edit Post</button>
        </div>
        </div>
    )
}