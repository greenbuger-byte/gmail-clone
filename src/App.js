import React,{ useEffect} from 'react';
import {Switch, useHistory, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Mail from './components/Mail/Mail';
import SendMail from './components/SendMail/SendMail';
import EmailList from './components/EmailList/EmailList';
import Login from './components/Login/Login';
import { auth, provider } from './components/Firebase';
import {MAIL_ROUTE, HOME_ROUTE} from './utils/paths';

import './App.scss';
import {selectSendMessageIsOpen} from "./features/mailSlice";
import { selectUser, login, logout } from './features/userSlice';
import {useDispatch, useSelector} from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
    const user = useSelector(selectUser);

    const authDal = (user) =>{
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
    }))
     } 

    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){   authDal(user)   }
      })
    }, []);

 

   const signIn = () => {
    auth.signInWithPopup(provider).then( ({user})=>{
        authDal(user);
    }).catch(err=> alert(err.message));
  }

  const signOut = () =>{
    auth.signOut().then(()=>{
      dispatch(logout());
    })
  }

  return (
    <div className="app">
  {!user ? <Login signIn={signIn}/>: <>  <Header signOut={signOut}/>
      <div className="app__body">
        <Sidebar/>
        <Switch>
          <Route path={MAIL_ROUTE}><Mail/></Route>
          <Route path={HOME_ROUTE}> <EmailList/> </Route>
        </Switch> 
          {sendMessageIsOpen && <SendMail/>}
      </div>
        </>
      }
    </div>
  

  );
}

export default App;
