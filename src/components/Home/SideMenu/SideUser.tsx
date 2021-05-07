import React, { useState } from 'react'
import {
    IconButton,
    List,
    makeStyles,
    Paper,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Collapse,
} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
    listItem: {
        paddingLeft: 70,
    },
}))

const SideUser = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div>
            <List>
                <ListItem>
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
                            <ListItemText primary="Starred" />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                            <ListItemText primary="Starred" />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    )
}

export default SideUser
