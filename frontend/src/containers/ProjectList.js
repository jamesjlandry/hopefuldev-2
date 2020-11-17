import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function ProjectList() {
  const showProjectList = useSelector(state => state.showProjectList)
  
  return (
    <React.Fragment >
       {showProjectList ?
      <div className="project_list">
        <div className="project_background"></div>
        <div className='project_card' >
          <img src={require('../images/Expertly/expertly_main_page.png')} alt='Expertly Home Page'></img>
          <div className='expertly_card'><strong><h1>Expertly</h1></strong></div>
          <div className='project_info'>
            <p>Ask questions with confidence. Get answers from real experts in their field. </p><a href='https://github.com/jamesjlandry/expertly_front_end' target="_blank" rel="noopener noreferrer" >GitHub Repo</a>
          </div>
        </div> 
        <div className='project_card' >
        <img src={require('../images/TheCursed/background.png')} alt='The Cursed Home Page'></img>
          <div className='cursed_card'><strong><h1>The Cursed</h1></strong></div>
          <div className='project_info'>
            <p>TableTop Roleplaying for the modern age. Build your character. Level them up. Try to take over the world. </p><a href='https://youtu.be/xLv1ZAYcieI' target="_blank" rel="noopener noreferrer" >YouTube Demo</a>
          </div>
        </div> 
        <div className='project_card' >
          <img src={require('../images/Precarious/precarious_gameplay.png')} alt='Precarious Game'></img>
          <div className='precarious_card'><strong><h1>Precarious!</h1></strong></div>
          <div className='project_info'>
            <p>Be the first to buzz in and win the points in this real time quiz game optimized for mobile. </p>
            <a href='https://github.com/jamesjlandry/precarious' target="_blank" rel="noopener noreferrer" >GitHub Repo</a>
            <a className="website_anchor" href='https://dry-depths-01460.herokuapp.com/' target="_blank" rel="noopener noreferrer" >Website</a>
          </div>
        </div> 
        <div className='project_card' >
          <img src={require('../images/Choose/choose.png')} alt='Choose Your Own Adventure Game'></img>
          <div className='choose_adventure_card'><strong><h1>Choose Your Own<br></br> Adventure</h1></strong></div>
          <div className='project_info'>
            <p>Choose your own adventure CLI app for the Self Join table connoisseur. </p><a href='https://github.com/jamesjlandry/mod_1_project_choose_your_adventure' target="_blank" rel="noopener noreferrer" >GitHub Repo</a>
          </div>
        </div> 
      <div>
      
    </div> 
    </div>
    :
    null
    }
    </React.Fragment>
  );
}

export default ProjectList;