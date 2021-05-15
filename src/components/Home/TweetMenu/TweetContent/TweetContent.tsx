import React from 'react'
import { Route, Switch } from 'react-router-dom'

import TweetContentItem from './TweetContentItem'
import TweetItemContainer from './TweetItemContainer'
import { useSelector } from 'react-redux'
import { StateType } from '../../../../store/store'
import { makeStyles, Typography } from '@material-ui/core'
import { getLoadingStateTweets, getTweetsItems } from '../../../../store/tweets/tweets-selector'
import { LoadingStateEnum } from '../../../../store/types'
import Spinner from '../../../Common/Spinner'
import UserProfile from './UserProfile/UserProfile'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },

    contentHeader: {
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderColor: '#ebeef0',
        padding: '15px 15px 0px',
        position: 'relative',
    },

    buttonGroup: {
        marginTop: 5,
        display: 'flex',
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.44)',
    },

    iconButton: {
        // '&:hover': {
        //     backgroundColor: theme.palette.secondary,
        // },
    },

    icon: {
        fontSize: 19,
    },
    spinnerShell: {
        textAlign: 'center',
        marginTop: '20%',
    },

    avatar: {
        width: 48,
        height: 48,
    },
    itemText: {
        whiteSpace: 'pre-line',
        wordWrap: 'break-word',
    },
    itemContent: {
        paddingLeft: 10,
    },
    iconDot: {
        borderRadius: '50%',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
        },
    },
    itemUserInfo: {
        marginBottom: 5,
        display: 'flex',

        '& div': {
            flex: 1,
        },
        '& span': {
            color: 'grey',
        },
    },
    itemPiece: {
        flex: '0.25',
    },
    spinnerShellItem: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        color: 'red',
        backgroundColor: 'rgba(255,255,255, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        cursor: 'text',
        userSelect: 'text',
    },
}))

const TweetContent = () => {
    const classes = useStyles()
    const tweets = useSelector(getTweetsItems)
    const loading = useSelector<StateType, LoadingStateEnum>(getLoadingStateTweets)

    return (
        <>
            <Switch>
                <Route path="/home" exact>
                    {loading === LoadingStateEnum.LOADED ? (
                        tweets.map((tweet, idx) => (
                            <TweetContentItem key={tweet._id} classes={classes} {...tweet} />
                        ))
                    ) : (
                        <div className={classes.spinnerShell}>
                            <Spinner size="70px" />
                        </div>
                    )}
                </Route>
                <Route path="/home/tweet/:id" exact>
                    <TweetItemContainer />
                </Route>
                <Route path="/home/user/:userid">
                    <UserProfile />
                </Route>
            </Switch>
        </>
    )
}

export default TweetContent
