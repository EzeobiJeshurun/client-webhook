import {ADD_MESSAGE_TO_ROOMSTORE,REMOVE_MESSAGE_FROM_ROOMSTORE,CLEAR_ROOMSTORE} from '../types';

const initialstate = {

};

export default function(state=initialstate, action){
    switch(action.type){
        case ADD_MESSAGE_TO_ROOMSTORE:

            return {

        }

        case REMOVE_MESSAGE_FROM_ROOMSTORE:
            return {

            }

        case CLEAR_ROOMSTORE:
            return {

            }    
        default:
            return state;


    }
};