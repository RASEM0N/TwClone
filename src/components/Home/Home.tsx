import {
    Container,
    createStyles,
    Grid,
    makeStyles,
    Paper,
    Typography,
    InputBase,
    withStyles,
} from '@material-ui/core'

import React from 'react'
import SideMenu from './SideMenu'
import TweetItem from './TweetItem'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
    },

    //#region Side menu
    sideMenu: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        '& li': {
            display: 'flex',
            alignItems: 'center',
        },
        '& h6': {
            fontWeight: 600,
            fontSize: 20,
            marginLeft: 15,
        },
    },
    sideMenuIcon: {
        fontSize: 28,
    },
    logo: {
        fontSize: 38,
        marginBottom: 20,
    },

    //#endregion

    //#region Content menu
    contentMenu: {
        height: '100%',
    },
    contentHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 700,
        },
    },

    //#region Messages
    contentMenuButtonGroup: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    contentMenuIconButton: {
        padding: '20px 0px 5px'
    },
    contentMenuIcon: {
        fontSize: 24,

    },
    //#endregion

    //#endregion
}))

// кастомный элемент
const SearchInput = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 45,
            padding: 0,
        },
    })
)(InputBase)

const Home = () => {
    const classes = useStyles()

    return (
        <section>
            <Container maxWidth={'lg'} className={classes.container}>
                <Grid container spacing={2}>
                    <Grid item xs={3} className={classes.sideMenu}>
                        <SideMenu classes={classes}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.contentMenu} variant={'outlined'}>
                            <Paper className={classes.contentHeader} variant={'outlined'}>
                                <Typography variant="h6">Главная</Typography>
                            </Paper>
                            <TweetItem classes={classes}/>
                            <TweetItem classes={classes}/>
                            <TweetItem classes={classes}/>
                            <TweetItem classes={classes}/>
                            <TweetItem classes={classes}/>
                            <TweetItem classes={classes}/>
                            <TweetItem classes={classes}/>
                            <TweetItem classes={classes}/>
                            <TweetItem classes={classes}/>
                            <TweetItem classes={classes}/>
                            <TweetItem classes={classes}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <SearchInput fullWidth placeholder={'Поиск по Твиттеру'} />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Home
