import React, { Fragment} from 'react';
import {makeStyles,withStyles}from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
//import the messenger
import Messenger from './Messenger';
import MessageList from './MessageList';
import lake from './images/no-img.jpeg'

//redux
import { addMessageToRoomStore, removeMessageFromRoomStore, clearRoomStore} from '../redux/actions/userActions'
import {connect} from 'react-redux';
const useStyles = makeStyles(theme =>({
 
   
    chatRoot: {
        marginTop: 15,
        borderRadius: 15,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: 360,
        overflow: 'hidden',
        maxWidth: 380,
        maxHeight: 450,
        backgroundColor: '#fafafa',
        [theme.breakpoints.down("700")]: {
            width: "100vw",
            maxHeight: 350,
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

   
    return (
        <Fragment>
        <div id="animate-area" >
        <div className="modal" ><span>Sibel Recruiters</span></div>
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
        <Messenger />
        </div>
            
            
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
