import React from 'react';

import {IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/Label';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

import {Button} from '@material-ui/core'

import './Sidebar.scss';

import SidebarOption from './SidebarOption';
import {useDispatch} from "react-redux";
import {openSendMessage} from "../../features/mailSlice";


const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button  
                className="sidebar__compose"
                onClick={()=>dispatch(openSendMessage())}
                startIcon={<AddIcon fontSize="large" />}
                >
                    Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title={"Inbox"}   number={53}  />
            <SidebarOption Icon={StarIcon}  title={"Starred"} number={53}  selected />
            <SidebarOption Icon={LabelImportantIcon}  title={"Important"} number={53}/>
            <SidebarOption Icon={NearMeIcon}  title={"Sent"} number={53}  />
            <SidebarOption Icon={NoteIcon}  title={"Drafts"} number={53} />
            <SidebarOption Icon={ExpandMoreIcon}  title={"More"} number={53} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton><PersonIcon/></IconButton>
                    <IconButton><DuoIcon/></IconButton>
                    <IconButton><PhoneIcon/></IconButton>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;