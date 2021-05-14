import React, { useState } from 'react'
import {
    IconButton,
    List,
    makeStyles,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Collapse,
    Typography,
} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: '5px 0px 5px 55px '
    },
    listItemAvatar: {
        padding: 0,
    },
    icon: {
        marginRight: 20,
    },
}))

const SideUser = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <List>
            <ListItem className={classes.listItemAvatar}>
                <ListItemAvatar>
                    <Avatar src="https://data.whicdn.com/images/300076584/original.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Dock of Shame" secondary="@FavDockOfChannel" />
                <IconButton onClick={handleClick}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.listItem}>
                        <SettingsOutlinedIcon color="action" className={classes.icon} />
                        <Typography variant="body1">Settings</Typography>
                    </ListItem>
                    <ListItem button className={classes.listItem}>
                        <MeetingRoomOutlinedIcon color="action" className={classes.icon} />
                        <Typography variant="body1">Logout</Typography>
                    </ListItem>
                </List>
            </Collapse>
        </List>
    )
}

export default SideUser
