import {ADD_MESSAGE_TO_ROOMSTORE, REMOVE_MESSAGE_FROM_ROOMSTORE, CLEAR_ROOMSTORE}  from '../types';

export const addMessageToRoomStore = (message)=>(dispatch)=>{
    dispatch({
        type: ADD_MESSAGE_TO_ROOMSTORE,
        payload: message,
    })

};


export const removeMessageFromRoomStore =(id)=>(dispatch)=>{
    dispatch({
        type: REMOVE_MESSAGE_FROM_ROOMSTORE,
        payload: id,
    })
};


export const clearRoomStore = ()=>(dispatch)=>{
    dispatch({
        type: CLEAR_ROOMSTORE,
    })
}