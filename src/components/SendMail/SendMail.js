import React from 'react';
import {Button} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {useForm} from 'react-hook-form';
import {useDispatch} from "react-redux";
import firebase from "firebase";
import {db} from "../Firebase";

import './SendMail.scss';
import {closeSendMessage} from "../../features/mailSlice";

const SendMail = () => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm();
    const onSubmit = (formData) => {
       
        db.collection('emails').add({
            to:formData.to,
            subject:formData.subject,
            message:formData.message,
            timeStamps: firebase.firestore.FieldValue.serverTimestamp()
        });
        dispatch(closeSendMessage());
    }
    const dispatch = useDispatch();

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New message</h3>
                <CloseIcon onClick={()=>dispatch(closeSendMessage())} className="sendMail__close"/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                    type="email"
                    placeholder="to"
                    name = "to"
                    {...register('to', {required:true})}
                    />
                {errors.to && <p className={'sendMail__errors'}>to is Required!</p>}
                <input 
                    type="text"
                    {...register('subject', {required:true})}
                    placeholder="Subject"
                    className=""/>
                {errors.subject && <p className={'sendMail__errors'}>Subject is Required!</p>}
                <input
                    {...register('message', {required:true})}
                    placeholder="message"
                    type="text" 
                    className="sendMail__message"/>
                {errors.message && <p className={'sendMail__errors'}>Message is Required!</p>}

            <div className="sendMail__options">
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="sendMail__send">
                        Send
                    </Button>
            </div>
        </form>
</div>

        
    );
};

export default SendMail;