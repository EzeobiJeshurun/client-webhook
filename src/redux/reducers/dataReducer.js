import {ADD_MESSAGE_TO_ROOMSTORE,REMOVE_MESSAGE_FROM_ROOMSTORE,CLEAR_ROOMSTORE} from '../types';

const initialstate = {
        TheChatHub: [],
};

export default function(state=initialstate, action){
    switch(action.type){
        case ADD_MESSAGE_TO_ROOMSTORE:

            return { ...state,
                TheChatHub: [...state.TheChatHub, action.payload],

        }

        case REMOVE_MESSAGE_FROM_ROOMSTORE:

        const indexOfDelete = state.TheChatHub.findIndex((message)=>message.id === action.payload);
        state.TheChatHub.splice(indexOfDelete,1);

            return {
                ...state,
            }

        case CLEAR_ROOMSTORE:
            return {
                ...state,
                TheChatHub: [],
            }    
        default:
            return state;


    }
};