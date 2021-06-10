import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
name: 'mail', 


initialState: {
    sendMessageIsOpen: false,
}, 


reducers: {
    openSendMessage: state =>{
        state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
        state.sendMessageIsOpen = false;
    }
    
}});

export const {openSendMessage, closeSendMessage} = mailSlice.actions; // action types


/// thunks
// export const incrementAsync = amount => dispatch =>{
//     setTimeout(()=>{
//         dispatch(increment(amount))
//     }, 1000);
// }

// mapGetters
export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;

// reducer
export default mailSlice.reducer;