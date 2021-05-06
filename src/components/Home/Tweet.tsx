import React, { useEffect } from 'react'
import TweetItem from './TweetItem'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from '../../store/store'
import { fetchTweetAction, getLoadingStateTweet, getTweetItem } from '../../store/bundles/tweet'
import { LoadingStateEnum } from '../../store/bundles/tweets'
import { useHistory } from 'react-router-dom'

const Tweet: React.FC<{ classes: any }> = ({ classes }) => {
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
                <TweetItem classes={classes} {...tweet} />
            ) : (
                'loading'
            )}
        </>
    )
}

export default Tweet
