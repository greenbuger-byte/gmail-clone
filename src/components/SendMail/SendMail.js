import React from 'react';
import './SendMail.scss';
import {Button} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {useForm} from 'react-hook-form';

const SendMail = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = (data) => {
        console.log('asdasd');
        console.log(data);
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New message</h3>
                <CloseIcon className="sendMail__close"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                    type="text" 
                    placeholder="to"
                    {...register("to")}
                    />
                <input 
                    type="text"
                    {...register("subject")}
                    placeholder="Subject"
                    className=""/>
                <input 
                    {...register("message")}
                    placeholder="message"
                    type="text" 
                    className="sendMail__message"/>
            </form> 
            <div className="sendMail__options">
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="sendMail__send">
                        Send
                    </Button>
            </div>
            
        </div>

        
    );
};

export default SendMail;