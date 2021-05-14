import React, { useState } from 'react'
import { Avatar, IconButton, Menu, MenuItem, Paper, Typography } from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AirplayIcon from '@material-ui/icons/Airplay'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined'
import { Link } from 'react-router-dom'
import { TweetType } from '../../../../store/types'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'
import Moment from 'react-moment'

interface PropsType extends TweetType {
    classes: ClassNameMap
}

const TweetContentItem: React.FC<PropsType> = ({
    classes,
    _id,
    text,
    createdAt,
    user: { fullname, username, avatarUrl },
}) => {
    const [open, setOpen] = useState<null | HTMLElement>(null)

    const handleClick = (e: any) => {
        console.log(e.currentTarget)
        setOpen(e.currentTarget)
    }
    const handleClose = () => {
        setOpen(null)
    }

    return (
        <Paper className={classes.contentHeader} variant={'outlined'}>
            <div className={classes.itemContent}>
                <Typography className={classes.itemUserInfo}>
                    <div
                        style={{
                            flex: 0.12,
                        }}
                    >
                        <Avatar alt="Avatar" src={avatarUrl} className={classes.avatar} />
                    </div>

                    <div
                        style={{
                            flex: 1,
                        }}
                    >
                        <b>{fullname}</b>
                        <br />
                        <span>@{username}</span>
                    </div>

                    <MoreVertOutlinedIcon
                        color="disabled"
                        className={classes.iconDot}
                        onClick={handleClick}
                    />
                    <Menu keepMounted open={!!open} onClose={handleClose} anchorEl={open}>
                        <MenuItem onClick={handleClose}>Перейти</MenuItem>
                        <MenuItem onClick={handleClose}>Обновить</MenuItem>
                        <MenuItem onClick={handleClose}>Удалить</MenuItem>
                    </Menu>
                </Typography>

                <Typography variant="body1" className={classes.text}>
                    {text}
                </Typography>
                <Typography color="primary" className={classes.data}>
                    <Moment format="HH:mm a &middot; DD MMMM YYYY">{createdAt}</Moment>
                </Typography>
                <div className={classes.buttonGroup}>
                    <IconButton className={classes.iconButton}>
                        <ChatBubbleOutlineIcon className={classes.icon} color="disabled" />
                    </IconButton>
                    <IconButton className={classes.iconButton}>
                        <RepeatIcon className={classes.icon} color="disabled" />
                    </IconButton>
                    <IconButton className={classes.iconButton}>
                        <FavoriteBorderIcon className={classes.icon} color="disabled" />
                    </IconButton>
                    <IconButton className={classes.iconButton}>
                        <AirplayIcon className={classes.icon} color="disabled" />
                    </IconButton>
                </div>
            </div>
        </Paper>
    )
}

export default TweetContentItem
