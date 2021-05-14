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
    makeStyles,
} from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import Spinner from "../../Common/Spinner";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 12,
        marginBottom: 25,
        padding: '2px 4px',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    divider: {
        width: '100%',
        height: '1.5px',
        margin: '0 auto',
    },
    spinnerShell: {
        textAlign: 'center',
        marginTop: '50%',
        transform: 'translateY(-100%)',
    },
}))

const InfoMenuUser: React.FC = () => {
    const classes = useStyles()
    return (
        <Paper className={classes.root} variant={'outlined'}>
            <List className={classes.list}>
                <ListItem>
                    <Typography variant={'h6'}>
                        <b>Кого почитать</b>
                    </Typography>
                </ListItem>
                <Divider className={classes.divider} />
                {/*<ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Dock of Shame" secondary="@FavDockOfChannel" />
                    <IconButton>
                        <PersonAddIcon />
                    </IconButton>
                </ListItem>*/}
                <div className={classes.spinnerShell}>
                    <Spinner size="60px" />
                </div>
            </List>
        </Paper>
    )
}

export default InfoMenuUser
