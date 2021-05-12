import React from 'react'
import { Paper } from '@material-ui/core'

import TweetTopHeader from './TweetTop/TweetTopHeader'
import TweetContent from './TweetContent/TweetContent'

const TweetMenu = () => {
    return (
        <Paper
            variant={'outlined'}
            style={{
                borderColor: '#ebeef0',
                position: 'relative',
                minHeight: '100%'
            }}
        >
            <TweetTopHeader />
            <TweetContent />
        </Paper>
    )
}

export default TweetMenu
