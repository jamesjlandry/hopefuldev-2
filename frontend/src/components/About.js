import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function About() {

  const dispatch = useDispatch()
  const showAbout = useSelector(state => state.showAbout)

  return (
    <div  >
      { showAbout ?
      <div className='about'>
        Coming Soon...
      </div>
      :
      null
      }
    </div>
  );
}

export default About;