import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchTweetAction,
    getLoadingStateTweet,
    getTweetItem,
} from '../../../../store/bundles/one-tweet'
import TweetContentItem from './TweetContentItem'
import { DispatchType } from '../../../../store/store'
import { LoadingStateEnum } from '../../../../store/bundles/tweets'

const TweetContentSome: React.FC<{ classes: any }> = ({ classes }) => {
    const dispatch = useDispatch<DispatchType>()
    const history = useHistory()
    const tweet = useSelector(getTweetItem)
    const loading = useSelector(getLoadingStateTweet)
    useEffect(() => {
        const id = history.location.pathname.split('/home/tweet/')[1]
        dispatch(fetchTweetAction(id))
    }, [dispatch])

    return (
        <>
            {loading === LoadingStateEnum.LOADED ? (
                <TweetContentItem classes={classes} {...tweet} />
            ) : (
                'loading'
            )}
        </>
    )
}

export default TweetContentSome
