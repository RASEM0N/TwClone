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
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../../../store/user/user-selector'
import { DispatchType } from "../../../store/store";
import { logoutAction } from "../../../store/user/user-action";

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: '5px 0px 5px 55px ',
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
    const user = useSelector(getUser)
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch<DispatchType>()

    const handleClick = () => {
        setOpen(!open)
    }

    const logout = () => {
        dispatch(logoutAction())
    }

    return (
        <List>
            <ListItem className={classes.listItemAvatar}>
                <ListItemAvatar>
                    <Avatar
                        src={user?.avatarUrl}
                        style={{
                            width: 48,
                            height: 48,
                        }}
                    />
                </ListItemAvatar>
                <ListItemText primary={user?.fullname} secondary={`@${user?.username}`} />
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
                    <ListItem button className={classes.listItem} onClick={logout}>
                        <MeetingRoomOutlinedIcon color="action" className={classes.icon} />
                        <Typography variant="body1">Logout</Typography>
                    </ListItem>
                </List>
            </Collapse>
        </List>
    )
}

export default SideUser
