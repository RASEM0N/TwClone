import React from 'react'
import { Button, Hidden, IconButton, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },

    list: {
        listStyle: 'none',
        padding: 0,
        '& li': {
            display: 'flex',
            alignItems: 'center',
        },
        '& h6': {
            fontWeight: 600,
            fontSize: 20,
            marginLeft: 15,
        },
    },

    logo: {
        fontSize: 38,
        marginBottom: 20,
    },
    icon: {
        fontSize: 28,
    },
    button: {
        marginTop: 35,
        padding: '25px 0px',
        // margin: '0 auto',
        alignSelf: 'center',
        width: 250,
    },
}))

const SideList = () => {
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <ul className={classes.list}>
                <li>
                    <IconButton color="primary">
                        <Link
                            to="/home"
                            style={{
                                color: 'inherit',
                            }}
                        >
                            <TwitterIcon className={classes.logo} />
                        </Link>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <SearchIcon className={classes.icon} />
                    </IconButton>
                    <Hidden smDown>
                        <Typography variant={'h6'}>Поиск</Typography>
                    </Hidden>
                </li>
                <li>
                    <IconButton>
                        <NotificationsNoneOutlinedIcon className={classes.icon} />
                    </IconButton>
                    <Hidden smDown>
                        <Typography variant={'h6'}>Уведомление</Typography>
                    </Hidden>
                </li>
                <li>
                    <IconButton>
                        <MailOutlineIcon className={classes.icon} />
                    </IconButton>
                    <Hidden smDown>
                        <Typography variant={'h6'}>Сообщение</Typography>
                    </Hidden>
                </li>
                <li>
                    <IconButton>
                        <BookmarkBorderIcon className={classes.icon} />
                    </IconButton>
                    <Hidden smDown>
                        <Typography variant={'h6'}>Закладки</Typography>
                    </Hidden>
                </li>
                <li>
                    <IconButton>
                        <ViewListOutlinedIcon className={classes.icon} />
                    </IconButton>
                    <Hidden smDown>
                        <Typography variant={'h6'}>Список</Typography>
                    </Hidden>
                </li>
                <li>
                    <IconButton>
                        <PersonOutlineIcon className={classes.icon} />
                    </IconButton>
                    <Hidden smDown>
                        <Typography variant={'h6'}>Профиль</Typography>
                    </Hidden>
                </li>
            </ul>
            <Button variant="contained" color="primary" className={classes.button}>
                Твитнуть
            </Button>
        </div>
    )
}

export default SideList
