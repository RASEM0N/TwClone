import React, { useEffect } from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { DispatchType } from '../../store/store'
import { fetchTweetsAction } from '../../store/tweets/tweets-reducer'

import InfoMenu from './InfoMenu/InfoMenu'
import SideMenu from './SideMenu/SideMenu'
import TweetMenu from './TweetMenu/TweetMenu'

// border: '1px solid black',

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        position: 'relative',
    },

    root: {
        minHeight: '100vh',
    },

    sideMenu: {
        flexDirection: 'column',
        display: 'flex',
        position: 'sticky',
        height: '99vh',
        zIndex: 10,
        top: 0,
    },

    tweetMenu: {},

    infoMenu: {
        position: 'sticky',
        height: '99vh',
        zIndex: 10,
        top: 0,
    },
}))

const Home = () => {
    const classes = useStyles()
    const dispatch = useDispatch<DispatchType>()

    useEffect(() => {
        dispatch(fetchTweetsAction())
    }, [dispatch])

    return (
        <Container maxWidth={'lg'} className={classes.container}>
            <Grid container spacing={2} className={classes.root}>
                <Grid item sm={1} md={3} className={classes.sideMenu}>
                    <SideMenu />
                </Grid>

                <Grid item sm={7} md={6} className={classes.tweetMenu}>
                    <TweetMenu />
                </Grid>

                <Grid item sm={4} md={3} className={classes.infoMenu}>
                    <InfoMenu />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
