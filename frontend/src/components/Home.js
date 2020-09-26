import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function Home() {

  const dispatch = useDispatch()
  const showHome = useSelector(state => state.showHome)

  return (
    <div  >
    {showHome ? 
    <div className='home_page' ><h1>Hi. I'm James. <br></br>
    I'm a Junior Full Stack Web Dev.</h1><p>I believe in clean and simple UX that stays out of the way of the user. I'm also into art, design, and all things creative.</p></div>
    :
    null}
    </div>
  );
}

export default Home;