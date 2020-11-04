import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EditorState, ContentState, convertFromRaw } from 'draft-js';


export default function PostSnipCard (props) {
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
          <div className='read_more' onClick={()=> dispatch({type: 'SHOW_POST', currentPost: post})}>Read More -</div>
        </div>
        </div>
    )
}

