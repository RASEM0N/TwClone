import React, { useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch } from 'react-redux'
import { makeStyles, Paper, InputBase, IconButton } from '@material-ui/core'
import { DispatchType } from '../../../store/store'
import InfoTags from './InfoTags/InfoTags'
import InfoMenuUser from './InfoMenuUser'
import { fetchTagsAction } from '../../../store/tags/tags-action'

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
    const dispatch = useDispatch<DispatchType>()

    // useEffect(() => {
    //     dispatch(fetchTagsAction())
    // }, [dispatch])
    return (
        <>
            {/*search*/}
            <Paper component="form" className={classes.root} variant={'outlined'}>
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase className={classes.input} placeholder="Поиск по Твиттеру" />
            </Paper>

            {/*list news*/}
            <InfoTags/>

            {/*Users*/}
            <InfoMenuUser />
        </>
    )
}
export default InfoMenu
