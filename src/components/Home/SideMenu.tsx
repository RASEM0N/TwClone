import React from 'react'
import {
    IconButton,
    Button,
    Typography,
    Hidden,
    TextField,
    List,
    ListItemIcon,
    Paper,
} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'

type PropsType = {
    classes: any
}

const SideMenu: React.FC<PropsType> = ({ classes }) => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                }}
            >
                <ul className={classes.sideMenuList}>
                    <li>
                        <IconButton color="primary">
                            <TwitterIcon className={classes.logo} />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <SearchIcon className={classes.sideMenuIcon} />
                        </IconButton>
                        <Hidden smDown>
                            <Typography variant={'h6'}>Поиск</Typography>
                        </Hidden>
                    </li>
                    <li>
                        <IconButton>
                            <NotificationsNoneOutlinedIcon className={classes.sideMenuIcon} />
                        </IconButton>
                        <Hidden smDown>
                            <Typography variant={'h6'}>Уведомление</Typography>
                        </Hidden>
                    </li>
                    <li>
                        <IconButton>
                            <MailOutlineIcon className={classes.sideMenuIcon} />
                        </IconButton>
                        <Hidden smDown>
                            <Typography variant={'h6'}>Сообщение</Typography>
                        </Hidden>
                    </li>
                    <li>
                        <IconButton>
                            <BookmarkBorderIcon className={classes.sideMenuIcon} />
                        </IconButton>
                        <Hidden smDown>
                            <Typography variant={'h6'}>Закладки</Typography>
                        </Hidden>
                    </li>
                    <li>
                        <IconButton>
                            <ViewListOutlinedIcon className={classes.sideMenuIcon} />
                        </IconButton>
                        <Hidden smDown>
                            <Typography variant={'h6'}>Список</Typography>
                        </Hidden>
                    </li>
                    <li>
                        <IconButton>
                            <PersonOutlineIcon className={classes.sideMenuIcon} />
                        </IconButton>
                        <Hidden smDown>
                            <Typography variant={'h6'}>Профиль</Typography>
                        </Hidden>
                    </li>
                </ul>
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        marginTop: 35,
                        padding: '25px 0px',
                        // margin: '0 auto',
                        alignSelf: 'center',
                        width: 250,
                    }}
                >
                    Твитнуть
                </Button>
            </div>
            <Paper variant="outlined">
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
                            <ListItem
                                button
                                style={{
                                    paddingLeft: 70,
                                }}
                            >
                                <ListItemText primary="Starred" />
                            </ListItem>
                            <ListItem
                                button
                                style={{
                                    paddingLeft: 70,
                                }}
                            >
                                <ListItemText primary="Starred" />
                            </ListItem>
                            <ListItem
                                button
                                style={{
                                    paddingLeft: 70,
                                }}
                            >
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Paper>
        </>
    )
}

export default SideMenu
