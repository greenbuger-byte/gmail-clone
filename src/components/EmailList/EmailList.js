import React, {useState, useEffect} from 'react';
import {Checkbox, IconButton} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import {db} from '../../components/Firebase';
import Section from  '../Section/Section';
import EmailRow from '../EmailRow/EmailRow';

import './emailList.scss'

function EmailList() {
    const [emails, setEmails] = useState([]);
    useEffect(() => {
        db.collection('emails')
            .orderBy('timeStamps', 'desc')
            .onSnapshot((snapshot) => setEmails(
                    snapshot.docs.map(doc=> {
                        console.log(doc);
                    return    ( {
                            id:doc.id,
                            data:doc.data()
                        })
                    }
                    )
                )
                    );
       console.log(emails)

    }, []);

    return (
        <div className="emailList">
           <div className="emailList__settings">
               <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton><ArrowDropDownIcon/></IconButton>
                    <IconButton><RedoIcon/></IconButton>
                    <IconButton><MoreVertIcon/></IconButton>
               </div>
               <div className="emailList__settingsRight">
                    <IconButton><ChevronLeftIcon/></IconButton>
                    <IconButton><ChevronRightIcon/></IconButton>
                    <IconButton><KeyboardHideIcon/></IconButton>
                    <IconButton><SettingsIcon/></IconButton>
               </div>
           </div>
           <div className="emailList__section">
               <Section Icon={InboxIcon} title="Primary" color="red" selected/>
               <Section Icon={PeopleIcon} title="Social" color="#1A73E8"/>
               <Section Icon={LocalOfferIcon} title="Promotions" color="green"/>
           </div>
           <div className="emailList__list">
               {emails.length>0? emails.map(({id, data:{to, subject, message, timeStamps}})=><EmailRow
                   key={id}
                   id={id}
                   title={to}
                   subject={subject}
                   description={message}
                   time={new Date(timeStamps?.seconds * 1000).toUTCString()}
               /> ): <NoResult/>}
           </div>
        </div>
    );
}
const NoResult = () =>{
    return <div className={'noEmails'}>
       <h2><InboxIcon/> No emails</h2>
</div>
}

export default EmailList;