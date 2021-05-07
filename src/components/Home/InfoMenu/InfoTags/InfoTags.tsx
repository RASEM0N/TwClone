import React from 'react'
import { useSelector } from 'react-redux'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'
import { Typography, List, ListItem, Paper } from '@material-ui/core'
import InfoTagItem from './InfoTagItem'
import { LoadingStateEnum } from '../../../../store/bundles/tweets'
import { getLoadingStateTags, getTagsItems } from '../../../../store/bundles/tags'

type PropsType = {
    classes: ClassNameMap
}

const InfoTags: React.FC<PropsType> = ({ classes }) => {
    const tags = useSelector(getTagsItems)
    const loading = useSelector(getLoadingStateTags)

    return (
        <Paper className={classes.root} variant={'outlined'}>
            <List className={classes.list}>
                <ListItem>
                    <Typography variant={'h6'}>Актуальные темы</Typography>
                </ListItem>
                {loading === LoadingStateEnum.LOADED
                    ? tags.map((tag) => <InfoTagItem {...tag} />)
                    : 'Loading ...'}
            </List>
        </Paper>
    )
}

export default InfoTags
