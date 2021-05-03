import React from 'react'
import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ReplyIcon from '@material-ui/icons/Reply';

type PropsType = {
    classes: any
}

const TweetItem: React.FC<PropsType> = ({ classes }) => {
    return (
        <Paper className={classes.contentHeader} variant={'outlined'}>
            <Grid container spacing={4}>
                <Grid item xs={1}>
                    <Avatar alt="Avatar" src="https://c.radikal.ru/c05/1909/8d/12426ee318d5.jpg" />
                </Grid>
                <Grid item xs={11}>
                    <Typography style={{
                            marginBottom: 10
                        }
                    }>
                        <b>text</b>
                        <span
                            style={{
                                color: 'grey',
                            }}
                        >
                            &ensp;&ensp;@jopaebal&ensp;&middot; 1 ч
                        </span>
                    </Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum officia
                        perferendis repellat sit voluptatum. Blanditiis cupiditate ducimus
                        laudantium. Accusamus adipisci alias consequuntur dolore expedita facilis
                        laboriosam magni nesciunt officia rem.
                    </Typography>
                    <div className={classes.contentMenuButtonGroup}>
                        <IconButton className={classes.contentMenuIconButton}>
                            <ChatBubbleOutlineIcon className={classes.contentMenuIcon} color='primary' style={{
                                marginRight: 10
                            }}/>
                            <span>1</span>
                        </IconButton>
                        <IconButton className={classes.contentMenuIconButton}>
                            <RepeatIcon className={classes.contentMenuIcon} color='primary'/>
                        </IconButton>
                        <IconButton className={classes.contentMenuIconButton}>
                            <FavoriteBorderIcon className={classes.contentMenuIcon} color='primary'/>
                        </IconButton>
                        <IconButton className={classes.contentMenuIconButton}>
                            <ReplyIcon className={classes.contentMenuIcon} color='primary'/>
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TweetItem
