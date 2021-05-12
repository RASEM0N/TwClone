import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, List, ListItem, Paper, Divider, makeStyles } from '@material-ui/core'
import InfoTagItem from './InfoTagItem'
import { getLoadingStateTags, getTagsItems } from '../../../../store/tags/tags-selector'
import { LoadingStateEnum } from '../../../../store/types'
import Spinner from '../../../Common/Spinner'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 12,
        marginBottom: 25,
        padding: '2px 4px',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        minHeight: 287,
        flexDirection: 'column',
    },
    divider: {
        width: '100%',
        height: '1.5px',
        margin: '0 auto',
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    spinnerShell: {
        textAlign: 'center',
        marginTop: '50%',
        transform: 'translateY(-100%)',
    },
}))

const InfoTags: React.FC = () => {
    const classes = useStyles()
    const tags = useSelector(getTagsItems)
    const loading = useSelector(getLoadingStateTags)

    return (
        <Paper className={classes.root} variant="outlined">
            <List className={classes.list}>
                <ListItem>
                    <Typography variant={'h6'}>
                        <b>Актуальные темы</b>
                    </Typography>
                </ListItem>
                <Divider orientation="horizontal" />
                {loading === LoadingStateEnum.LOADED ? (
                    tags.map((tag) => <InfoTagItem {...tag} />)
                ) : (
                    <div className={classes.spinnerShell}>
                        <Spinner size="20%" />
                    </div>
                )}
            </List>
        </Paper>
    )
}

export default InfoTags
