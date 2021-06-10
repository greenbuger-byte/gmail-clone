import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Mail from './components/Mail/Mail';
import SendMail from './components/SendMail/SendMail';
import EmailList from './components/EmailList/EmailList';

import {MAIL_ROUTE, HOME_ROUTE} from './utils/paths';

import './App.scss';
import {useSelector} from "react-redux";

function App() {
    const {sendMessageIsOpen} = useSelector(state=>state.mail);
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar/>
        <Switch>
          <Route path={MAIL_ROUTE}><Mail/></Route>
          <Route path={HOME_ROUTE}> <EmailList/> </Route>
        </Switch> 
          {sendMessageIsOpen && <SendMail/>}
      </div>
    
    </div>
  );
}

export default App;
