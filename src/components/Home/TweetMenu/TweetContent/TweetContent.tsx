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
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },

    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    iconButton: {
        padding: '20px 0px 5px',
    },
    icon: {
        fontSize: 24,
    },
}))

const TweetContent = () => {
    const classes = useStyles()
    const tweets = useSelector(getTweetsItems)
    const loading = useSelector<StateType, LoadingStateEnum>(getLoadingStateTweets)

    return (
        <>
            <Route path="/home" exact>
                {loading === LoadingStateEnum.LOADED
                    ? tweets.map((tweet) => (
                          <TweetContentItem key={tweet._id} classes={classes} {...tweet} />
                      ))
                    : 'loading...'}
            </Route>
            <Route path="/home/tweet/:id" exact>
                <TweetContentSome classes={classes} />
            </Route>
        </>
    )
}

export default TweetContent
