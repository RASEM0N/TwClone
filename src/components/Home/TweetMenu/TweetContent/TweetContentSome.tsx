import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import TweetContentItem from './TweetContentItem'
import { DispatchType } from '../../../../store/store'
import { getLoadingStateTweet, getTweetItem } from "../../../../store/one-tweet/one-tweet-selector";
import { fetchTweetAction } from "../../../../store/one-tweet/one-tweet-action";
import { LoadingStateEnum } from '../../../../store/types'
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

interface PropsTypes {
    classes: ClassNameMap
}

const TweetContentSome: React.FC<PropsTypes> = ({ classes }) => {
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
