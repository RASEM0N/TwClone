import React from 'react'
import {
    Avatar,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    Paper,
    Typography,
} from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import Spinner from '../../../Common/Spinner'
import { DispatchType } from '../../../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersAction } from '../../../../store/otherUsers/otherUsers-action'
import { getUsers, getUsersStatus } from '../../../../store/otherUsers/otherUsers-selector'
import { LoadingStateEnum } from '../../../../store/types'
import InfoMenuUserItem from './InfoMenuUserItem'

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
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    divider: {
        width: '100%',
        height: '1.5px',
        margin: '0 auto',
    },
    spinnerShell: {
        textAlign: 'center',
        marginTop: '50%',
        transform: 'translateY(-100%)',
    },
}))

const InfoMenuUser: React.FC = () => {
    const dispatch = useDispatch<DispatchType>()
    const users = useSelector(getUsers)
    const loading = useSelector(getUsersStatus)
    const classes = useStyles()

    React.useEffect(() => {
        dispatch(fetchUsersAction())
    }, [])

    return (
        <Paper className={classes.root} variant={'outlined'}>
            <List className={classes.list}>
                <ListItem>
                    <Typography variant={'h6'}>
                        <b>Кого почитать</b>
                    </Typography>
                </ListItem>
                <Divider className={classes.divider} />
                {loading === LoadingStateEnum.LOADING ? (
                    <div className={classes.spinnerShell}>
                        <Spinner size="60px" />
                    </div>
                ) : (
                    users.map((user) => {
                        return <InfoMenuUserItem user={user} key={user._id} />
                    })
                )}
            </List>
        </Paper>
    )
}

export default InfoMenuUser
