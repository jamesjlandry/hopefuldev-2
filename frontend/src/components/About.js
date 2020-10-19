import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function About() {

  const showAbout = useSelector(state => state.showAbout)

  return (
    <div  >
      { showAbout ?
      <div className='about'>
        <h2>Hi. I'm James.</h2>
        <br></br>
        <h2>I'm a junior full stack web developer</h2> 
        <p>I've spent the last 12 years as a people leader using  creativity to motivate others and make work fun and energizing.</p>
        <p>Now I'm using my creativity to build apps with a focus on clean UX that stays out of the way of the user. </p>
      </div>
      :
      null
      }
    </div>
  );
}

export default About;