import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmailList from './EmailList.js'
import Mail from './Mail.js'
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import Login from './Login.js'
import { useEffect } from 'react';
import { auth } from './Firebase';
import { login } from './features/userSlice';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
      auth.onAuthStateChanged(user => {
        if (user) {
          //user is logged in
          dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }))
        }
      })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ):(

        <div className="app">
        <Header />
          <div className="app__body">
         
          <Sidebar />
  
          <Routes>
            <Route path="/mail" element={<Mail/>} />
            <Route path="/" element={<EmailList/>} />
          </Routes>
          </div>
          { sendMessageIsOpen && <SendMail />}
      </div>

      )}
     
    </Router>
  );
}

export default App;
