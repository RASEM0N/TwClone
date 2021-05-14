import React, { useState } from 'react'
import { Avatar, Grid, IconButton, Menu, MenuItem, Paper, Typography } from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AirplayIcon from '@material-ui/icons/Airplay'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined'
import { Link } from 'react-router-dom'
import { TweetType } from '../../../../store/types'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'
import Moment from 'react-moment'
import normalizingValue from '../../../../utils/normalizingValue'

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
            <Grid container>
                <Grid item xs={1}>
                    <Avatar alt="Avatar" src={avatarUrl} className={classes.avatar} />
                </Grid>
                <Grid item xs={11} className={classes.itemContent}>
                    <Typography className={classes.itemUserInfo}>
                        <div>
                            <b>{fullname}</b>
                            <span>
                                &nbsp; @{username} &middot;{' '}
                                <Moment format="DD MMMM H:mm">{createdAt}</Moment>
                            </span>
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
                    <Link to={`/home/tweet/${_id}`}>
                        <Typography variant="body1" className={classes.text}>
                            {text}
                        </Typography>
                    </Link>

                    <div className={classes.buttonGroup}>
                        <div className={classes.itemPiece}>
                            <IconButton className={classes.iconButton}>
                                <ChatBubbleOutlineIcon className={classes.icon} color="disabled" />
                            </IconButton>
                            <span>{normalizingValue(Math.floor(Math.random() * 10_000))}</span>
                        </div>
                        <div className={classes.itemPiece}>
                            <IconButton className={classes.iconButton}>
                                <RepeatIcon className={classes.icon} color="disabled" />
                            </IconButton>
                            <span>{normalizingValue(Math.floor(Math.random() * 4_120))}</span>
                        </div>
                        <div className={classes.itemPiece}>
                            <IconButton className={classes.iconButton}>
                                <FavoriteBorderIcon className={classes.icon} color="disabled" />
                            </IconButton>
                            <span>{normalizingValue(Math.floor(Math.random() * 130))}</span>
                        </div>
                        <div className={classes.itemPiece}>
                            <IconButton className={classes.iconButton}>
                                <AirplayIcon className={classes.icon} color="disabled" />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TweetContentItem
