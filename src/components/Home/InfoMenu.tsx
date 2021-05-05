import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from '../../store/store'
import { fetchTagsAction, getLoadingStateTags, getTagsItems } from '../../store/bundles/tags'
import { LoadingStateEnum } from '../../store/bundles/tweets'
import { Link, Route } from 'react-router-dom'
import TagItem from './TagItem'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
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
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}))

const InfoMenu = () => {
    const classes = useStyles()
    const dispatch = useDispatch<DispatchType>()
    const tags = useSelector(getTagsItems)
    const loading = useSelector(getLoadingStateTags)

    useEffect(() => {
        dispatch(fetchTagsAction())
    }, [dispatch])
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
            <Paper className={classes.root} variant={'outlined'}>
                <List className={classes.list}>
                    <ListItem>
                        <Typography variant={'h6'}>Актуальные темы</Typography>
                    </ListItem>
                    {loading === LoadingStateEnum.LOADED
                        ? tags.map((tag) => <TagItem {...tag} />)
                        : 'Loading ...'}
                </List>
            </Paper>

            <Paper className={classes.root} variant={'outlined'}>
                <List className={classes.list}>
                    <ListItem>
                        <Typography variant={'h6'}>Кого почитать</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Dock of Shame" secondary="@FavDockOfChannel" />
                        <IconButton>
                            <PersonAddIcon />
                        </IconButton>
                    </ListItem>
                </List>
            </Paper>
        </>
    )
}
export default InfoMenu
