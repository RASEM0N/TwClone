import React from 'react'
import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AirplayIcon from '@material-ui/icons/Airplay';
import { TweetType } from '../../../../store/tweets/tweets-reducer'
import { Link } from 'react-router-dom'

interface PropsType extends TweetType {
    classes: any
}

const TweetContentItem: React.FC<PropsType> = ({
    classes,
    _id,
    text,
    user: { fullname, username, avatarUrl },
}) => {
    return (
        <Paper className={classes.contentHeader} variant={'outlined'}>
            <Grid container>
                <Grid
                    item
                    xs={1}

                >
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
                            &nbsp; @{username} &middot; 1 ч
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
                            <span>48</span>
                        </div>
                        <div
                            style={{
                                flex: '0.25',
                            }}
                        >
                            <IconButton className={classes.iconButton}>
                                <RepeatIcon className={classes.icon} color="disabled" />
                            </IconButton>
                            <span>873</span>
                        </div>
                        <div
                            style={{
                                flex: '0.25',
                            }}
                        >
                            <IconButton className={classes.iconButton}>
                                <FavoriteBorderIcon className={classes.icon} color="disabled" />
                            </IconButton>
                            <span>4.5 тыс</span>
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
