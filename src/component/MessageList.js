import React,{Fragment} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import JeshurunAvatar from './images/jeshurunAvatar.jpg';


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
}));

var mockStore = [{name: "jeshurun", message: "hi kssdjfkj skjfkljf skjf dskfjs  ksdjf kdjf dj ", id: 1, date: "30 May, 2020"},
{name: "jeshurun", message: "hi kssdjfkj skjfkljf skjf dskfjs  ksdjf kdjf dj ", id: 2, date: "30 May, 2020"},
{name: "you", message: "hi kssdjfkj skjfkljf skjf dskfjs  ksdjf kdjf dj " , id: 3, date: "30 May, 2020"},
{name: "jeshurun", message: "hi kssdjfkj skjfkljf skjf dskfjs jkjdkl fjlksm ssdsdksd ksdkdsf ksdjf kdjf dj ", id: 4, date: "30 May, 2020"},
{name: "you", message: "hi kssdjfkj skjfkljf skjf dskfjs  ksdjf kdjf dj skjklsjfkjdfkjskdjfkdjfksjklfjskldjfskjdksjkdjskdjjsjfk ", id: 5, date: "30 May, 2020"}
];


function MessageList() {
  const classes = useStyles();

 

  return (
    <List className={classes.root} >
    
    
            {mockStore.map((item) => (
              <Fragment key={item.id}>  
              <ListItem >
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
                primary={<div>{item.name}<span className={classes.increaseDotInSpan}>.</span>
                    <span className={classes.messageDate}>{item.date}</span>
                </div>} secondary={item.message} />
              </ListItem>
              <Divider variant="inset" component="li" />
              </Fragment>
            ))}

    </List>
  );
}


export default MessageList;