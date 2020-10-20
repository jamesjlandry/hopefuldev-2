import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function About() {

  const showAbout = useSelector(state => state.showAbout)

  return (
    <div  >
      { showAbout ?
      <div className='about'>
        <div>
        <h2>Hi. I'm James.</h2>
        <h2>I'm a junior full stack web developer.</h2> 
        <p>After spending 12 years as a people leader with a penchant for creative problem solving, I'm turning my creativity towards Software Development.</p>
        </div>
        <img src={require('../images/About/james.jpg')} alt='James Landry'></img>
      </div>
      :
      null
      }
    </div>
  );
}

export default About;