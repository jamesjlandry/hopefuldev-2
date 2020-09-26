import React, { useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import NavBar from './containers/NavBar';
import MainBody from './containers/MainBody';
import Admin  from './containers/Admin';





function App() {

  const dispatch = useDispatch()

  useEffect( async () => {
    let response = await fetch('http://localhost:3000/posts')
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