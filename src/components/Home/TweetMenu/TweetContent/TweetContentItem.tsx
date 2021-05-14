import React from 'react'
import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AirplayIcon from '@material-ui/icons/Airplay'
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
    return (
        <Paper className={classes.contentHeader} variant={'outlined'}>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar
                        alt="Avatar"
                        src={avatarUrl}
                        style={{
                            width: 48,
                            height: 48,
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={11}
                    style={{
                        paddingLeft: 10,
                    }}
                >
                    <Typography
                        style={{
                            marginBottom: 5,
                        }}
                    >
                        <b>{fullname}</b>
                        <span
                            style={{
                                color: 'grey',
                            }}
                        >
                            &nbsp; @{username} &middot; <Moment format="DD MMMM H:mm" >{createdAt}</Moment>

                        </span>
                    </Typography>
                    <Link to={`/home/tweet/${_id}`}>
                        <Typography
                            variant="body1"
                            style={{
                                whiteSpace: 'pre-line',
                                wordWrap: 'break-word',
                            }}
                        >
                            {text}
                        </Typography>
                    </Link>

                    <div className={classes.buttonGroup}>
                        <div
                            style={{
                                flex: '0.25',
                            }}
                        >
                            <IconButton className={classes.iconButton}>
                                <ChatBubbleOutlineIcon className={classes.icon} color="disabled" />
                            </IconButton>
                            <span>{normalizingValue(Math.floor(Math.random()*10_000))}</span>
                        </div>
                        <div
                            style={{
                                flex: '0.25',
                            }}
                        >
                            <IconButton className={classes.iconButton}>
                                <RepeatIcon className={classes.icon} color="disabled" />
                            </IconButton>
                            <span>{normalizingValue(Math.floor(Math.random()*4_120))}</span>
                        </div>
                        <div
                            style={{
                                flex: '0.25',
                            }}
                        >
                            <IconButton className={classes.iconButton}>
                                <FavoriteBorderIcon className={classes.icon} color="disabled" />
                            </IconButton>
                            <span>{normalizingValue(Math.floor(Math.random()*130))}</span>
                        </div>
                        <div
                            style={{
                                flex: '0.25',
                            }}
                        >
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
