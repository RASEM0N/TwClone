import React from 'react'
import { Route } from 'react-router-dom'
import {
    getLoadingStateTweets,
    getTweetsItems,
    LoadingStateEnum,
} from '../../../../store/bundles/tweets'
import TweetContentItem from './TweetContentItem'
import TweetContentSome from './TweetContentSome'
import { useSelector } from 'react-redux'
import { StateType } from '../../../../store/store'
import { CircularProgress, makeStyles } from '@material-ui/core'

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
}))

const TweetContent = () => {
    const classes = useStyles()
    const tweets = useSelector(getTweetsItems)
    const loading = useSelector<StateType, LoadingStateEnum>(getLoadingStateTweets)

    return (
        <>
            <Route path="/home" exact>
                {loading === LoadingStateEnum.LOADED ? (
                    tweets.map((tweet) => (
                        <TweetContentItem key={tweet._id} classes={classes} {...tweet} />
                    ))
                ) : (
                    <div
                        style={{
                            textAlign: 'center',
                            marginTop: '20%'
                        }}
                    >
                        <CircularProgress
                            style={{
                                width: '10%',
                                height: '10%',
                            }}
                        />
                    </div>
                )}
            </Route>
            <Route path="/home/tweet/:id" exact>
                <TweetContentSome classes={classes} />
            </Route>
        </>
    )
}

export default TweetContent
