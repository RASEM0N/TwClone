import {
    Button,
    Container,
    Grid,
    makeStyles,
    Paper,
    TextField,
    Typography,
} from '@material-ui/core'

import React, { useEffect } from 'react'
import InfoMenu from './InfoMenu'
import SideMenu from './SideMenu'
import TweetItem from './TweetItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined'
import DataUsageOutlinedIcon from '@material-ui/icons/DataUsageOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, StateType } from '../../store/store'
import {
    fetchTweetsAction,
    getLoadingStateTweets,
    getTweetsItems,
    LoadingStateEnum,
    TweetType,
} from '../../store/bundles/tweets'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
    },

    //#region Side menu
    sideMenu: {
        top: 0,
        position: 'sticky',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    sideMenuList: {
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
    sideMenuIcon: {
        fontSize: 28,
    },
    logo: {
        fontSize: 38,
        marginBottom: 20,
    },

    //#endregion

    //#region Content menu
    contentMenu: {
        height: '100%',
    },
    contentHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        padding: '10px 15px',

        '& h6': {
            fontWeight: 700,
        },
    },

    //#region Messages
    contentMenuButtonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    contentMenuIconButton: {
        padding: '20px 0px 5px',
    },
    contentMenuIcon: {
        fontSize: 24,
    },
    //#endregion

    //#endregion
}))

// кастомный элемент
// const SearchInput = withStyles(() =>
//     createStyles({
//         input: {
//             borderRadius: 30,
//             backgroundColor: '#E6ECF0',
//             height: 45,
//             padding: 0,
//         },
//     })
// )(InputBase)

const Home = () => {
    const classes = useStyles()
    const dispatch = useDispatch<DispatchType>()
    const tweets = useSelector(getTweetsItems)
    const loading = useSelector<StateType, LoadingStateEnum>(getLoadingStateTweets)
    useEffect(() => {
        dispatch(fetchTweetsAction())
    }, [dispatch])
    return (
        <section>
            <Container maxWidth={'lg'} className={classes.container}>
                <Grid container spacing={2}>
                    {/*Side menu*/}
                    <Grid item xs={3} className={classes.sideMenu}>
                        <SideMenu classes={classes} />
                    </Grid>

                    {/*Content Menu*/}
                    <Grid item xs={6}>
                        <Paper className={classes.contentMenu} variant={'outlined'}>
                            {/*Form Menu*/}
                            <Paper
                                className={classes.contentHeader}
                                variant={'outlined'}
                                style={{
                                    position: 'sticky',
                                    top: '0',
                                    zIndex: 1,
                                    borderBottomWidth: 14,
                                }}
                            >
                                <Typography variant="h6">Главная</Typography>
                                <ListItem
                                    style={{
                                        marginTop: 15,
                                    }}
                                >
                                    <ListItemAvatar
                                        style={{
                                            alignSelf: 'end',
                                        }}
                                    >
                                        <Avatar
                                            style={{
                                                width: 50,
                                                height: 50,
                                            }}
                                            src="https://data.whicdn.com/images/300076584/original.jpg"
                                        />
                                    </ListItemAvatar>
                                    <div
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            placeholder="Что происходит?"
                                            variant="outlined"
                                            style={{
                                                width: '100%',
                                            }}
                                        />
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginTop: 15,
                                            }}
                                        >
                                            <div>
                                                <IconButton>
                                                    <ImageOutlinedIcon color="primary" />
                                                </IconButton>
                                                <IconButton>
                                                    <EmojiEmotionsOutlinedIcon color="primary" />
                                                </IconButton>
                                            </div>

                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <div>269</div>
                                                <IconButton>
                                                    <DataUsageOutlinedIcon color="primary" />
                                                </IconButton>
                                                <Button variant={'contained'} color="primary">
                                                    Твитнуть
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<IconButton>*/}
                                    {/*    <PersonAddIcon />*/}
                                    {/*</IconButton>*/}
                                </ListItem>
                            </Paper>

                            {/*Tweets*/}
                            {loading === LoadingStateEnum.LOADED
                                ? tweets.map((tweet) => (
                                      <TweetItem
                                          classes={classes}
                                          key={tweet._id}
                                          text={tweet.text}
                                          user={tweet.user}
                                      />
                                  ))
                                : 'loading...'}
                        </Paper>
                    </Grid>

                    {/*Info Menu*/}
                    <Grid
                        item
                        xs={3}
                        style={{
                            position: 'sticky',
                            top: 0,
                            height: '100vh',
                        }}
                    >
                        <InfoMenu />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Home
