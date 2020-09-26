import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function Expertly() {

  
  const showExpertly = useSelector(state => state.showExpertly)
  const dispatch = useDispatch()

  return (
    <React.Fragment>
        {
        showExpertly ?

            <div>

            </div>
           :
           null
            }       
    </React.Fragment>
  );
}

export default Expertly;