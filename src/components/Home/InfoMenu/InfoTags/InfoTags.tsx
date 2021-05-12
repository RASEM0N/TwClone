import React from 'react'
import { useSelector } from 'react-redux'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'
import { Typography, List, ListItem, Paper, CircularProgress, Divider } from '@material-ui/core'
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
        <Paper
            className={classes.root}
            variant={'outlined'}
            style={{
                minHeight: 287,
                flexDirection: 'column',
            }}
        >
            <List className={classes.list}>
                <ListItem>
                    <Typography variant={'h6'}>
                        <b>Актуальные темы</b>
                    </Typography>
                </ListItem>
                <Divider
                    orientation="horizontal"
                    style={{
                        width: '100%',
                        height: '1.5px',
                        margin: '0 auto',
                    }}
                />
                {loading === LoadingStateEnum.LOADED ? (
                    tags.map((tag) => <InfoTagItem {...tag} />)
                ) : (
                    <div
                        style={{
                            textAlign: 'center',
                            marginTop: '50%',
                            transform: 'translateY(-100%)',
                        }}
                    >
                        <CircularProgress
                            style={{
                                width: '15%',
                                height: '15%',
                            }}
                        />
                    </div>
                )}
            </List>
        </Paper>
    )
}

export default InfoTags
