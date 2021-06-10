import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
name: 'mail', 


initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
}, 


reducers: {
    selectMail : (state, action) =>{
        state.selectedMail = action.payload;
    },
    openSendMessage: state =>{
        state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
        state.sendMessageIsOpen = false;
    }
    
}});

export const {selectMail, openSendMessage, closeSendMessage} = mailSlice.actions; // action types


/// thunks
// export const incrementAsync = amount => dispatch =>{
//     setTimeout(()=>{
//         dispatch(increment(amount))
//     }, 1000);
// }

// actions
export const selectOpenMail =  state => state.mail.selectedMail;

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;

// reducer
export default mailSlice.reducer;