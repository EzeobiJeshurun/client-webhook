import React, {Fragment,useState,useEffect,useMemo} from 'react';
//client side socket.io for communicating with backend socket.io

import {makeStyles} from '@material-ui/core/styles';

import io from 'socket.io-client';
let socket;

const useStyles = makeStyles({
    chatRoot: {

    },
    container: {

    }

});

function Messenger(props) {
    //extra things you want from the props
    const {currentUser, messageRoom }= props;

    const classes = useStyles();
    const [message, setMessage] = useState('');
    //acts as a temporal chatRoom store
    const [roomStore, setRoomStore] = useState([]);

    //the Endpoint OR SERVER which the socket points to
    const ENDPOINT = "localhost:5000";
    //runs when the component renders
    useEffect(()=>{
        //creating an instance of the client-socket connected to the server-socket
        socket = io(ENDPOINT);

        //communicate with the server side socket, currentUser: currentUser
        //messageRoon: messageRoom , any text or data can be sent like to the backend socket
        socket.emit('/message', {currentUser, messageRoom},()=>{
            //this callback receives an object which was destructed to get
            // error message "error: '...any error from backend' " sent from the backend socket
            
        })

        return ()=>{
            //disconnects this instance of socket
            socket.emit('disconnect');
            
            socket.off()
        }

    },[ENDPOINT, currentUser, messageRoom]);

    useEffect(()=>{
        socket.on('chats', (message)=>{
            setRoomStore([...roomStore, message]);
        })
    },[roomStore]);

//A function for sending messages

const sendMessage = (event)=>{
    event.preventDefault();
    if(message){
        socket.emit('sendMe',message,()=>{
            setMessage('');
        })
    }
}




    return (
        <Fragment>
        <div className={classes.chatRoot}>
            <div className={classes.container}>
            <input value={message} 
            onChange={(event)=>{setMessage(event.target.value)}}
            onKeyPress={(event)=>event.key === 'Enter' ? sendMessage(event) : null}
            
            />
            </div>
        </div>
        </Fragment>
    )
}

export default Messenger;
