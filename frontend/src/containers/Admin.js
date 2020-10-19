import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlogList from './BlogList'
import ProjectList from './ProjectList'
import About from '../components/About'
import AdminLogin from '../components/AdminLogin'
import NewPost from '../components/NewPost'
import AdminBlogList from '../components/AdminBlogList'
import EditPost from '../components/EditPost'
import { BACKEND_URL } from '../constants'
import 'draft-js/dist/Draft.css';

// checks for the site admin as the only user created. if the admin is not logged in, shows login box
// otherwise the admin can make new blog posts and edit current posts from this page.

function Admin() {

  const loggedIn = useSelector(state => state.loggedIn)
  const newBlogPost = useSelector(state => state.newBlogPost)
  const editPost = useSelector(state => state.editPost)
  const dispatch = useDispatch()

    useEffect( async () => {
      let response = await fetch(`${BACKEND_URL}/logged_in`, {
            credentials: 'include',
            
        })
        
        let currentUser = await response.json()
        if (currentUser !== null) {
            dispatch({type: "SET_LOG_IN", currentUser: currentUser})
        } 
    }, [])

    const handleLogout = async () => {
      let response = await fetch(`${BACKEND_URL}/log_out`, {
          credentials: 'include',
          method: 'DELETE'
      })
      let loggedOut = await response.json()
      dispatch({type: "LOG_OUT" })
    }
 
  return (
    <div >
     {loggedIn ? 
     <div className="Admin" >
       <button className='log_out' type='button' onClick={() => handleLogout()}>Log Out</button>
       
       {newBlogPost ?
       <NewPost />
      :
      <div className='new_post_div'>
      <button className='new_post' type='button' onClick={() => dispatch({type: 'NEW_BLOG_TRUE'})}>
        <strong>New Post</strong> 
       </button>
       </div>
      }
      {editPost ? 
        <EditPost />
      :
      null
      }
       <AdminBlogList /> 
     </div>
     :
     <AdminLogin/>}
    </div>
  );
}

export default Admin;