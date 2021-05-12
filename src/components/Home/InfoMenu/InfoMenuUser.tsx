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
    Divider,
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
                    <Typography variant={'h6'}>
                        <b>Кого почитать</b>
                    </Typography>
                </ListItem>
                <Divider
                    orientation="horizontal"
                    style={{
                        width: '100%',
                        height: '1.5px',
                        margin: '0 auto',
                    }}
                />
                <ListItem button>
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
