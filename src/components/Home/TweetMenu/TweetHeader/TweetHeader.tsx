import React from 'react'
import { makeStyles, Paper, Typography, IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Route, useHistory } from 'react-router-dom'
import TweetHeaderForm from './TweetHeaderForm'

const useStyles = makeStyles((theme) => ({
    root: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        padding: '10px 15px',
        position: 'sticky',
        top: '0',
        zIndex: 1,
        borderBottomWidth: 14,

        '& h6': {
            fontWeight: 700,
        },
    },
}))

const TweetHeader = () => {
    const classes = useStyles()
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <Paper className={classes.root} variant={'outlined'}>
            <Route path={'/home/:any'}>
                <IconButton onClick={goBack}>
                    <ArrowBackIcon color="primary" />
                </IconButton>
            </Route>
            <Route path="/home/tweet">
                <Typography variant="h6">Твитнуть</Typography>
            </Route>
            <Route path={['/home', '/home/search']} exact>
                <Typography variant="h6">Твиты</Typography>
            </Route>
            <Route path={['/home', '/home/search']} exact>
                <TweetHeaderForm />
            </Route>
        </Paper>
    )
}

export default TweetHeader
