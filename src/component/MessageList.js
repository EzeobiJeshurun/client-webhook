import React,{Fragment,useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import JeshurunAvatar from './images/jeshurunAvatar.jpg';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
//redux 
import { addMessageToRoomStore, removeMessageFromRoomStore, clearRoomStore} from '../redux/actions/userActions'
import {connect} from 'react-redux';



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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
    minHeight: 150,
    [theme.breakpoints.down("xs")]:{
        maxHeight: 250,
    }
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  inline: {
    display: 'inline',
    wordBreak: "break-word",
  },
  increaseDotInSpan:{
    fontSize: 25,
    marginLeft: 10,
    color: '#777b7e'
    
  },
  messageDate:{
    color: '#777b7e',
    fontSize: 12,
  },
  theDeleteIconHide:{
      display: 'none',
  },
  theDeleteIconShow: {
      //display: 'inline',
      //margin: 0,
     // padding: 0,
  }
}));

var mockStore = [{name: "jeshurun", message: "hi kssdjfkj skjfkljf skjf dskfjs  ksdjf kdjf dj ", id: 1, date: "30 May, 2020"},
{name: "jeshurun", message: "hi kssdjfkj skjfkljf skjf dskfjs  ksdjf kdjf dj ", id: 2, date: "30 May, 2020"},
{name: "you", message: "hi kssdjfkj skjfkljf skjf dskfjs  ksdjf kdjf dj " , id: 3, date: "30 May, 2020"},
{name: "jeshurun", message: "hi kssdjfkj skjfkljf skjf dskfjs jkjdkl fjlksm ssdsdksd ksdkdsf ksdjf kdjf dj ", id: 4, date: "30 May, 2020"},
{name: "you", message: "hi kssdjfkj skjfkljf skjf dskfjs  ksdjf kdjf dj skjklsjfkjdfkjskdjfkdjfksjklfjskldjfskjdksjkdjskdjjsjfk ", id: 5, date: "30 May, 2020"}
];


function MessageList(props) { 
    const {TheChatHub} = props
    const [toggle, setToggle] = useState(true);
    const classes = useStyles();
    dayjs.extend(relativeTime);

    const deleleteMessage = (id) =>{
      props.removeMessageFromRoomStore(id)
      ToggleDeleteButton(id);
    }
    //Toggles Delete Button and changes ListItem background Color when an ListItem is pressed
   const ToggleDeleteButton =(uniqueNumber) =>{
       
       const theDeleteIconAction = document.getElementById(`delete${uniqueNumber}`);
       const theListItem = document.getElementById(`list${uniqueNumber}`) 
       if(toggle){
           setToggle(!toggle);
           theListItem.style.backgroundColor = "#d3d3d3";
          theDeleteIconAction.classList.remove(classes.theDeleteIconHide);
       }else{
           setToggle(!toggle);
           theListItem.style.backgroundColor = "white";
          theDeleteIconAction.classList.add(classes.theDeleteIconHide);
       }
    }

  

 

  return (
    <List className={classes.root} >
    
    
            {TheChatHub.map((item) => (
                
              <Fragment key={item.id}>  
              <ListItem id={`list${item.id}`} onClick={(event)=>{
                  ToggleDeleteButton(item.id);
              }} >
              <ListItemAvatar >
              <StyledBadge
                overlap="circle"
                anchorOrigin={{
                vertical: 'bottom',
                 horizontal: 'right',
                 }}
                 variant="dot"
                        >
                <Avatar alt="Jeshurun" src={JeshurunAvatar} />
                </StyledBadge>
              </ListItemAvatar>
                <ListItemText className={classes.inline} 
                primary={<div>{item.user=== "chatbot"? "Sibel": "you"}<span className={classes.increaseDotInSpan}>.</span>
                    <span className={classes.messageDate}>{dayjs(item.time).fromNow()}</span>
                </div>} secondary={item.text} />
                <ListItemSecondaryAction id ={`delete${item.id}`} className={classes.theDeleteIconHide}>
                    <IconButton onClick={()=>{
                      deleleteMessage(item.id);
                    }} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
              </Fragment>
            ))}
          <div id="usedToMakeElementScrollToView"></div>
    </List>
  );
}
const mapStateToProps = (state)=>({
  TheChatHub: state.data.TheChatHub,
})

const mapActionsToProps = {
  addMessageToRoomStore,
  removeMessageFromRoomStore,
  clearRoomStore
}

export default connect(mapStateToProps,mapActionsToProps)(MessageList);