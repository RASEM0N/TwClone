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
        alignItems: 'center',
    },

    list: {
        listStyle: 'none',
        padding: 0,
        '& li': {
            marginBottom: '14px',
        },
        '& h6': {
            fontWeight: 600,
            fontSize: 20,
            marginLeft: 15,
        },
        '& button': {
            paddingRight: '20px',
        },
    },
    logoButton: {
        padding: 13,
    },
    logo: {
        fontSize: 34,
    },
    icon: {
        fontSize: 28,
    },
    button: {
        margin: '35px 20px',
        minWidth: '200px',
        padding: '25px',
    },
}))

const SideList = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <ul className={classes.list}>
                <li>
                    <IconButton color="primary" className={classes.logoButton}>
                        <Link to="/home">
                            <TwitterIcon className={classes.logo} />
                        </Link>
                    </IconButton>
                </li>
                <li>
                    <Button>
                        <SearchIcon className={classes.icon} />
                        <Hidden smDown>
                            <Typography variant={'h6'}>Поиск</Typography>
                        </Hidden>
                    </Button>
                </li>
                <li>
                    <Button>
                        <NotificationsNoneOutlinedIcon className={classes.icon} />
                        <Hidden smDown>
                            <Typography variant={'h6'}>Уведомление</Typography>
                        </Hidden>
                    </Button>
                </li>
                <li>
                    <Button>
                        <MailOutlineIcon className={classes.icon} />
                        <Hidden smDown>
                            <Typography variant={'h6'}>Сообщение</Typography>
                        </Hidden>
                    </Button>
                </li>
                <li>
                    <Button>
                        <BookmarkBorderIcon className={classes.icon} />
                        <Hidden smDown>
                            <Typography variant={'h6'}>Закладки</Typography>
                        </Hidden>
                    </Button>
                </li>
                <li>
                    <Button>
                        <ViewListOutlinedIcon className={classes.icon} />
                        <Hidden smDown>
                            <Typography variant={'h6'}>Список</Typography>
                        </Hidden>
                    </Button>
                </li>
                <li>
                    <Button>
                        <PersonOutlineIcon className={classes.icon} />
                        <Hidden smDown>
                            <Typography variant={'h6'}>Профиль</Typography>
                        </Hidden>
                    </Button>
                </li>
            </ul>
            <Button variant="contained" color="primary" className={classes.button}>
                Твитнуть
            </Button>
        </div>
    )
}

export default SideList
