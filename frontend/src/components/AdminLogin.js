import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'

function AdminLogin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()





 let logIn = async (user) => {
   let response = await fetch('http://localhost:3000/login', {
       credentials: 'include',
       method: "POST",
       headers: {
           accept: 'application/json',
           'content-type': 'application/json'
       },
       body: JSON.stringify(user)
   })
   let currentUser = await response.json()
   if (currentUser !== null) {
       dispatch({type: "SET_LOG_IN", currentUser: currentUser})
      
    }
    }

    let handleSubmit = (e) => {
      e.preventDefault();
      let user = {
          username: username,
          password: password,
      }
      logIn(user)
      }
  return (
    <div className="page_background_blur">
     <form className='login_box' onSubmit={event => handleSubmit(event)}>
       <h1>HopefulDevLife</h1>
        <input
            onChange={event => setUsername(event.target.value)}
            id='username'
            placeholder='enter username'
            type='text'
            value={username}
        />
          <input
              onChange={event => setPassword(event.target.value)} 
              id="password" 
              placeholder="password"
              type="password" 
              value={password}
          />

          <div>
                <button type="submit">Make It So</button>
          </div>
     </form>


    </div>
  );
}

export default AdminLogin;