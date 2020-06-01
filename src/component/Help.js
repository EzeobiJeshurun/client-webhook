import React, { Fragment, useState} from 'react';
import {makeStyles} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';


import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';


import IconButton from '@material-ui/core/IconButton';




const Styles = makeStyles(theme =>({

    
    closeButton:{
        position: 'absolute',
        left: '90%',
        top: '4%',
        color: '#043927',
        [theme.breakpoints.down('xs')]:{
            left: '85%'
        },
    },
    thecloseIcon:{
        color: '#043927'
    },
    thedialogTitle:{
        color: '#043927'
    },

    helpText: {
        textAlign: 'center'
    },
    positionHelp: {
        position: 'relative',
        marginLeft: 15,
        borderRadius: 20,
        height: 30,
        color: '#f2f3f4',
        borderColor: '#f2f3f4',
    }
    
    
}));

function Help(props) {
    
    const [open , setOpen] = useState(false);
    const [error, setError] = useState({error: ""});
    //the state helpClose, is assigned to ensure the dialog closes only when there is no errors.
    
    const [body, setBody] = useState("");
    const handleOpen=()=>{
        setOpen(true);
    };
    const handleClose=()=>{
        setOpen(false);
    };
    
        
 
    const classes = Styles();
    return (
        <Fragment>
            <Tooltip title="chat help" placement="top">
           <Button className={classes.positionHelp} variant="outlined" onClick={()=>{
               handleOpen();
           }}>
               Help
            </Button>
            </Tooltip> 
            <Dialog open={open} onClose={()=>{
                handleClose();
            }}  fullWidth maxWidth="sm">
                <Tooltip title="close" placement="top">
                <IconButton onClick={()=>{
                    handleClose();
                }} className={classes.closeButton}>
                    <CloseIcon color="inherit" className={classes.thecloseIcon}/>
                </IconButton>
                </Tooltip>
                <DialogTitle className={classes.thedialogTitle}>Chat help</DialogTitle>
                <DialogContent>
                    <Typography className="classes.helpText" variant="body2">Click on any message to delete it. To view all chats, click on view messages</Typography>


                </DialogContent>
            </Dialog>
        </Fragment>
    )
}

export default Help;


