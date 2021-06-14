import React, { useState } from 'react'
import { Avatar, Grid, IconButton, Menu, MenuItem, Paper, Typography } from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AirplayIcon from '@material-ui/icons/Airplay'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined'
import { Link } from 'react-router-dom'
import { LoadingStateEnum, TweetType } from '../../../../store/types'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'
import Moment from 'react-moment'
import normalizingValue from '../../../../utils/normalizingValue'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from '../../../../store/store'
import Spinner from '../../../Common/Spinner'
import { getIdTweetToDelete, getStatusDeleteTweet } from '../../../../store/tweets/tweets-selector'
import { fetchDeleteTweetAction } from '../../../../store/tweets/tweets-reducer'

interface PropsType extends TweetType {
    classes: ClassNameMap
}

const TweetContentItem: React.FC<PropsType> = ({
    classes,
    _id,
    text,
    createdAt,
    image,
    user: { fullname, username, avatarUrl },
}) => {
    const [open, setOpen] = useState<null | HTMLElement>(null)
    const dispatch = useDispatch<DispatchType>()
    const loading = useSelector(getStatusDeleteTweet)
    const idToDelete = useSelector(getIdTweetToDelete)

    const deleteTweet = (e: any) => {
        setOpen(null)
        e.preventDefault()
        dispatch(fetchDeleteTweetAction(_id))
    }
    const handleClick = (e: any) => {
        e.preventDefault()
        setOpen(e.currentTarget)
    }
    const handleClose = (e: any) => {
        e.preventDefault()
        setOpen(null)
    }

    return (
        <Link to={`/home/tweet/${_id}`}>
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
                                <MenuItem>Перейти</MenuItem>
                                <MenuItem>Обновить</MenuItem>
                                <MenuItem
                                    onClick={deleteTweet}
                                    disabled={loading === LoadingStateEnum.LOADING}
                                >
                                    Удалить
                                </MenuItem>
                            </Menu>
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.text}
                            onClick={(e) => {
                                e.preventDefault()
                            }}
                        >
                            {text}
                        </Typography>
                        {image && (
                            <div
                                style={{
                                    maxWidth: '500px',
                                    marginTop: 20,
                                    maxHeight: '300px',
                                }}
                            >
                                <img
                                    src={image}
                                    alt="PHOTO"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </div>
                        )}

                        <div className={classes.buttonGroup}>
                            <div className={classes.itemPiece}>
                                <IconButton className={classes.iconButton}>
                                    <ChatBubbleOutlineIcon
                                        className={classes.icon}
                                        color="disabled"
                                    />
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
                {loading === LoadingStateEnum.LOADING && idToDelete === _id && (
                    <div className={classes.spinnerShellItem}>
                        <Spinner size="60px" />
                    </div>
                )}
            </Paper>
        </Link>
    )
}

export default TweetContentItem
