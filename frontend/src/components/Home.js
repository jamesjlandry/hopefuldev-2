import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function Home() {

  const dispatch = useDispatch()
  const showHome = useSelector(state => state.showHome)

  return (
    <div  >
    {showHome ? 
    <div className='home_page' > <br></br>
    <img src={require('../images/home/Hdlogo.png')} alt='Hopeful Dev logo'></img>
    <h2>Hopeful Dev</h2>
    <br></br>
    <div>Developer</div>
    <br></br>
    <div>Leader</div>
    <br></br>
    <div>Artist</div>
    </div>
    

    :
    null}
    </div>
  );
}

export default Home;