import React from 'react'
import { IconButton, Button, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

type PropsType = {
    classes: any
}

const SideMenu: React.FC<PropsType> = ({ classes }) => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
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
                        <Typography variant={'h6'}>Поиск</Typography>
                    </li>
                    <li>
                        <IconButton>
                            <NotificationsNoneOutlinedIcon className={classes.sideMenuIcon} />
                        </IconButton>
                        <Typography variant={'h6'}>Уведомление</Typography>
                    </li>
                    <li>
                        <IconButton>
                            <MailOutlineIcon className={classes.sideMenuIcon} />
                        </IconButton>
                        <Typography variant={'h6'}>Сообщение</Typography>
                    </li>
                    <li>
                        <IconButton>
                            <BookmarkBorderIcon className={classes.sideMenuIcon} />
                        </IconButton>
                        <Typography variant={'h6'}>Закладки</Typography>
                    </li>
                    <li>
                        <IconButton>
                            <ViewListOutlinedIcon className={classes.sideMenuIcon} />
                        </IconButton>
                        <Typography variant={'h6'}>Список</Typography>
                    </li>
                    <li>
                        <IconButton>
                            <PersonOutlineIcon className={classes.sideMenuIcon} />
                        </IconButton>
                        <Typography variant={'h6'}>Профиль</Typography>
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
            <div style={{
                height: 100,

            }}>User profile ....</div>
        </>
    )
}

export default SideMenu
