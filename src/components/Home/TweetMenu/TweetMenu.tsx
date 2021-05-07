import React from 'react'
import { makeStyles, Paper } from '@material-ui/core'

import TweetHeader from './TweetHeader/TweetHeader'
import TweetContent from './TweetContent/TweetContent'

const useStyles = makeStyles((theme) => ({
    root: {
        // height: '99.5vh',
    },
}))

const TweetMenu = () => {
    const classes = useStyles()

    return (
        <Paper className={classes.root} variant={'outlined'}>
            <TweetHeader />
            <TweetContent />
        </Paper>
    )
}

export default TweetMenu
