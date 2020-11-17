import React, { useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import NavBar from './containers/NavBar';
import MainBody from './containers/MainBody';
import Admin  from './containers/Admin';
import { BACKEND_URL } from './constants'




function App() {

  const dispatch = useDispatch()

  useEffect( async () => {
    let response = await fetch(`${BACKEND_URL}/posts`)
    let posts = await response.json()
    dispatch({type: "SET_POSTS", posts: posts})
   
  },[])

  return (
    <div className="App">
      <NavBar/>
      <MainBody/>
      <BrowserRouter>
        <Route exact path='/admin' component={Admin} />
        
       
      </BrowserRouter>
    </div>
  );
}

export default App;