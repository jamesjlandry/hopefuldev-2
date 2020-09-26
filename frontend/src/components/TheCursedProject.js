import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function TheCursed() {

  
  const showTheCursed = useSelector(state => state.showTheCursed)

  return (
    <React.Fragment>
        {
        showTheCursed ?

            <div>
                
            </div>
           :
           null
            }       
    </React.Fragment>
  );
}

export default TheCursed;