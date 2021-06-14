import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles, Paper, InputBase, IconButton } from '@material-ui/core'
import InfoTags from './InfoTags/InfoTags'
import InfoMenuUser from './InfoMenuUser/InfoMenuUser'
import { useDispatch, useSelector } from 'react-redux'
import { getFilterTweets } from '../../../store/tweets/tweets-selector'
import { DispatchType } from '../../../store/store'
import { setFilter } from '../../../store/tweets/tweets-reducer'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 12,
        marginBottom: 25,
        padding: '2px 4px',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },

    itemLink: {},
}))

const InfoMenu = () => {
    const classes = useStyles()
    const search = useSelector(getFilterTweets)
    const dispatch = useDispatch<DispatchType>()

    return (
        <>
            {/*search*/}
            <Paper component="form" className={classes.root} variant={'outlined'}>
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Поиск по Твиттеру"
                    value={search}
                    onChange={(e) => {
                        dispatch(setFilter(e.target.value))
                    }}
                />
            </Paper>

            {/*list news*/}
            <InfoTags />

            {/*Users*/}
            <InfoMenuUser />
        </>
    )
}
export default InfoMenu
