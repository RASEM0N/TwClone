import React from 'react'
import {
    Typography,
    List,
    ListItem,
    Avatar,
    ListItemText,
    IconButton,
    Paper,
    ListItemAvatar,
} from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'

type PropsType = {
    classes: ClassNameMap
}

const InfoMenuUser: React.FC<PropsType> = ({ classes }) => {
    return (
        <Paper className={classes.root} variant={'outlined'}>
            <List className={classes.list}>
                <ListItem>
                    <Typography variant={'h6'}>Кого почитать</Typography>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Dock of Shame" secondary="@FavDockOfChannel" />
                    <IconButton>
                        <PersonAddIcon />
                    </IconButton>
                </ListItem>
            </List>
        </Paper>
    )
}

export default InfoMenuUser
