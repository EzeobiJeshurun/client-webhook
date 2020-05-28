import React, {useState, Fragment} from 'react';
import {makeStyles,withStyles}from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
//import the messenger
import Messenger from './Messenger';
import MessageList from './MessageList';

//redux
import { addMessageToRoomStore, removeMessageFromRoomStore, clearRoomStore} from '../redux/actions/userActions'
import {connect} from 'react-redux';
const useStyles = makeStyles(theme =>({
    mainDiv: {
        position: 'relative',
        width: '100%',
        backgroundColor : '#acf345',
        height: '100vh',
    },
    chatRoot: {
        borderRadius: 15,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        width: 360,
        overflow: 'hidden',
        maxWidth: 360,
        maxHeight: 350,
        backgroundColor: '#fafafa',
        [theme.breakpoints.down("xs")]: {
            width: "98vw",
        }
    },
    chatHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: 'center',
        height: 60,
        backgroundColor: '#043927',

    },
    badgeIconAtHeader: {
        position: 'relative',
        paddingLeft: 25,

    },
    textHeaderChat: {
        marginLeft: 25,
        color: '#f2f3f4',
        fontSize: 14,
        fontFamily: 'serif',
    }
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

function Home(props) {
    const { TheChatHub } = props;
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
        <div className={classes.chatHeader}> 
        <div className={classes.badgeIconAtHeader}>
        <StyledBadge
                overlap="circle"
                anchorOrigin={{
                vertical: 'bottom',
                 horizontal: 'right',
                 }}
                 variant="dot"
                        >
                
                </StyledBadge>
        </div>
        <div><Typography className={classes.textHeaderChat}>Chat with Sibel</Typography></div>     
        </div>
        
        <MessageList />
        <Messenger currentUser={currentUser} messageRoom={messageRoom}/>
        </div>
            <h1>hello {currentUser} and {messageRoom}</h1>
            
        </div>
        
        </Fragment>
    )
}
const mapStateToProps = (state)=>({
  TheChatHub : state.data.TheChatHub,
})

const mapActionsToProps = {

}

export default connect(mapStateToProps,mapActionsToProps)(Home);
