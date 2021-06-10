import React from 'react';
import {useDispatch} from 'react-redux';
import {Checkbox, IconButton} from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import  LabelImportantOutlinedIcon  from '@material-ui/icons/LabelImportantOutlined';
import {useHistory} from 'react-router-dom';
import {MAIL_ROUTE} from '../../utils/paths';
import {selectMail} from '../../features/mailSlice';

import './EmailRow.scss';



const EmailRow = ({id, title, subject, description, time}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const opentMail = () =>{
        dispatch(selectMail({
            id, title, subject, description, time
        }));
        history.push(MAIL_ROUTE);
    }
    return (
        <div className="emailRow" onClick={opentMail}>
            <div className="emailRow__options">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <h3 className="emailRow__title">{title}</h3>
            <div className="emailRow__message">
                <h4>{subject} {" "}
                <span className="emailRow__description">- {description}</span></h4>
            </div>
            <div className="emailRow__time">{time}</div>
        </div>
    );
};

export default EmailRow;