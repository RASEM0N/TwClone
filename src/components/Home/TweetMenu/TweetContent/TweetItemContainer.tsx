import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { DispatchType } from '../../../../store/store'
import { getLoadingStateTweet, getTweetItem } from '../../../../store/one-tweet/one-tweet-selector'
import { LoadingStateEnum } from '../../../../store/types'
import Spinner from '../../../Common/Spinner'
import TweetItem from './TweetItem'
import { makeStyles } from '@material-ui/core'
import { fetchTweetAction } from '../../../../store/one-tweet/one-tweet-reducer'

interface PropsTypes {}

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
        justifyContent: 'space-around',
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.44)',
    },

    iconButton: {},

    icon: {
        fontSize: 24,
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
        marginBottom: 15,
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

    data: {
        marginTop: 20,
        letterSpacing: 1.4
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
        alignItems: 'center'
    }
}))

const TweetItemContainer: React.FC<PropsTypes> = () => {
    const classes = useStyles()

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
            {loading === LoadingStateEnum.LOADED && tweet ? (
                <TweetItem classes={classes} {...tweet} />
            ) : (
                <div className={classes.spinnerShell}>
                    <Spinner size="70px" />
                </div>
            )}
        </>
    )
}

export default TweetItemContainer
