import React from 'react'
import { makeStyles, Typography, IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Route, useHistory } from 'react-router-dom'
import TweetTopForm from './TweetTopForm'

const useStyles = makeStyles((theme) => ({
    header: {
        top: '0',
        zIndex: 1,
        position: 'sticky',
        display: 'flex',
        padding: '0 15px',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #ebeef0',
        height: '52px',
        '& h6': {
            fontWeight: 700,
        },
    },
}))

const TweetTopHeader = () => {
    const classes = useStyles()
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <>
            <div className={classes.header}>
                <Route path={'/home/:any'}>
                    <IconButton onClick={goBack} style={{
                        marginRight: '15px'
                    }}>
                        <ArrowBackIcon color="primary" />
                    </IconButton>
                </Route>
                <Route path="/home/tweet">
                    <Typography variant="h6">Твит</Typography>
                </Route>
                <Route path={['/home', '/home/search']} exact>
                    <Typography variant="h6">Твиты</Typography>
                </Route>
            </div>

            <Route path={['/home', '/home/search']} exact>
                <TweetTopForm />
            </Route>
        </>
    )
}

export default TweetTopHeader
