import React from 'react';
import { makeStyles, Typography, Drawer , AppBar , Toolbar , Avatar} from '@material-ui/core';
import SpeakerNotesTwoTone from '@material-ui/icons/SpeakerNotesTwoTone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WrapTextSharp from '@material-ui/icons/WrapTextSharp'
import BorderColorSharp from '@material-ui/icons/BorderColorSharp'
import { useHistory, useLocation } from 'react-router-dom';
import {format} from 'date-fns'

const DrawerWidth = 240;

const styles = makeStyles((them) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding:them.spacing(3) ,
            margin:'0.4rem'
        },

        drawer: {
            width: DrawerWidth
        },
        drawerPaper: {
            width: DrawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {

            background: 'linear-gradient(to bottom, #fbfbfb00, #7842c74f)'
        } ,
        title:{
            padding:them.spacing(3) ,
            textAlign:'center'
        } ,

        AppBar:{
            width: `calc(100% - ${DrawerWidth}px)`
        },
        toolbar: them.mixins.toolbar ,
        date:{
            flexGrow:1
        } ,
        Avatar:{
            marginLeft:them.spacing(2)
        }
    }

})

export default function Layout({ children }) {
    const classes = styles();
    const history = useHistory()
    const location = useLocation()
    const menuItems = [
        {
            text: 'Note..',
            icon: <WrapTextSharp color='Secondary' />,
            path: '/'
        },
        {
            text: 'Craete a Note..',
            icon: <BorderColorSharp color='Secondary' />,
            path: '/Create'
        }
    ];
    return (
        <div className={classes.root}>
            {/* app bar */}

        <AppBar 
        color='Textsecondary'
        className={classes.AppBar}
        >
            <Toolbar>
                <Typography className={classes.date}>
                   today is  {format(new Date() , 'yyyy-MM-dd')}
                </Typography>
                <Typography>
                    user.name
                </Typography>
                <Avatar className={classes.Avatar} src='../../public/favicon.ico' />
            </Toolbar>
        </AppBar>

            {/* side Drawer */}

            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography className={classes.title} variant='h4' endIcon={SpeakerNotesTwoTone}>
                        opps
                    </Typography>
                </div>

                {/* list */}

                <List>
                    {menuItems.map(item => (
                        <ListItem key={item.text}
                            button
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon icon={item.icon} />
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>


            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>

        </div>
    )
}