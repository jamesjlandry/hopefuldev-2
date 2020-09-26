import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {MarkGithubIcon, HomeFillIcon, CodeSquareIcon, NoteIcon, InfoIcon} from '@primer/octicons-react'


function NavBar() {
  let dispatch = useDispatch()
  return (
    <div className='nav'>
        <div className='nav_icon' onClick={() => dispatch({type: "SHOW_HOME"})}>Home</div>
        <div className='nav_icon' onClick={() => dispatch({type: "SHOW_ABOUT"})}>About</div>
        <div className='nav_icon' onClick={() => dispatch({type: "SHOW_BLOG_LIST"})}>Blog</div>
        <div className='nav_icon' onClick={() => dispatch({type: "SHOW_PROJECT_LIST"})}>Projects</div>
        <a className='nav_icon' href='https://github.com/jamesjlandry' target="_blank" rel="noopener noreferrer" ><MarkGithubIcon size={16}/></a>
    </div>
  );
}

export default NavBar;