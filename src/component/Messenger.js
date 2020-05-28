import React, {Fragment,useState,useEffect,useCallback} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {makeStyles} from '@material-ui/core/styles';
//client side socket.io for communicating with backend socket.io
import io from 'socket.io-client';


//redux
import { addMessageToRoomStore, removeMessageFromRoomStore, clearRoomStore} from '../redux/actions/userActions'
import {connect} from 'react-redux';

let socket;
const useStyles = makeStyles({
    messengerchatRoot: {
        width: '100%'
    },
    inputcontainer: {


    },
    textInput: {
        padding: 0,
        margin: 0,
        caretColor: 'black',
        width: '99%',
        maxWidth: '360',
        height: '100%',
        overflow: 'auto',
        wordBreak: 'break-word',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor: '#043927',
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            borderColor: '#043927'
        },


    },
    sendButtonDiv: {
        display: 'flex',
        flexDirection: 'row',
       alignItems: 'center',
        width: '100%',
        height: 45,
        backgroundColor: '#043927'
    },
    sendButton: {
        marginLeft: 'auto',
        marginRight: 15,
        borderRadius: 20,
        height: 30,
        color: '#f2f3f4',
        borderColor: '#f2f3f4',
    }

});

function Messenger(props) {
    //extra things you want from the props
    const {currentUser, messageRoom, TheChatHub }= props;

    const classes = useStyles();
    const [message, setMessage] = useState('');
    //acts as a temporal chatRoom store
    const [roomStore, setRoomStore] = useState([]);
    

    const sendMessageToStore = props.addMessageToRoomStore;


    //used to make the most recent message scrollToView
    const pushRecentMessageToScreenView = ()=>{
        document.getElementById("usedToMakeElementScrollToView").scrollIntoView();
    }
   
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
           // setRoomStore([...roomStore, message]);
            let myId = Math.floor(Math.random()*100000000000000);
            let myTime = new Date().toISOString();
            let TheResentMessage = {...message,id: myId, time: myTime};
            sendMessageToStore(TheResentMessage);
    
        })
    },[roomStore,sendMessageToStore]);

//A function for sending messages

const sendMessage = (event)=>{
    event.preventDefault();
    if(message){
        socket.emit('sendMe',message,()=>{
            setMessage('');
        })
    }
}

//fire push resent pushRecentMessageToScreenView

useEffect(()=>{
    pushRecentMessageToScreenView();
},[TheChatHub, pushRecentMessageToScreenView]);





    return (
        <Fragment>
        <div className={classes.messengerchatRoot}>
            <div className={classes.inputcontainer}>
            <TextField variant="outlined" value={message} className={classes.textInput}
            onChange={(event)=>{setMessage(event.target.value)}}
            onKeyPress={(event)=>event.key === 'Enter' ? sendMessage(event) : null}
            
            />
            </div>
            <div className={classes.sendButtonDiv}>
            <Button onClick={(event)=>{
                sendMessage(event);
            }} className={classes.sendButton} variant="outlined">send</Button></div>
        </div>
        </Fragment>
    )
}

const mapStateToProps = (state)=>({
    TheChatHub: state.data.TheChatHub,
})

const mapActionsToProps = {
    addMessageToRoomStore, 
    removeMessageFromRoomStore, 
    clearRoomStore
}

export default connect(mapStateToProps,mapActionsToProps)(Messenger);
