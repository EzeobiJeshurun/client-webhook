import React, {useState, Fragment} from 'react';
import {makeStyles}from '@material-ui/core/styles';
//import the messenger
import Messenger from './Messenger';

const useStyles = makeStyles(theme =>({
    mainDiv: {
        width: '100%',
        backgroundColor : '#acf345',
        height: '100vh',
    },
    chatRoot: {
        width: 361,
        maxWidth: 362,
        [theme.breakpoints.down("xs")]: {
            width: "100vw",
        }
    },
    chatHeader: {
        
    }
}));

function Home() {

    const classes = useStyles();

    //A random number generator, provides an integer id
    const identityForPresentUser = Math.floor(Math.random()*10000000000);
    //used to create and identify a specific channel or room for the communication
    const  identityForMessageRoom = Math.floor(Math.random()*10000000000);

    //the state below is used to identify the specific user interacting
    //with the chat bot, it is sent to the server and user in the front-end as well
    const [currentUser, setCurrentUser]= useState(identityForPresentUser);
    //MessageRoom id sent to server to used in creating a session or room 
    const [messageRoom, setMessageRoom]= useState(identityForMessageRoom);
    return (
        <Fragment>
        <div className={classes.mainDiv}>
        <div className={classes.chatRoot}>
        <div> </div>
        
        </div>
            <h1>hello {currentUser} and {messageRoom}</h1>
            <Messenger currentUser={currentUser} messageRoom={messageRoom}/>
        </div>
        
        </Fragment>
    )
}

export default Home;
