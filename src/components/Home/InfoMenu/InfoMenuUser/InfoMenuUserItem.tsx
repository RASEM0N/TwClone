import React from 'react'
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { UserPublicType } from '../../../../store/types'
import { Link } from 'react-router-dom'

interface PropsTypes {
    user: UserPublicType
    access: boolean
}

const InfoMenuUserItem: React.FC<PropsTypes> = ({
    user: { avatarUrl, username, _id, fullname },
    access,
}) => {
    const addPerson = (e: any) => {
        e.preventDefault()
    }
    return (
        <Link to={`/home/user/${_id}`}>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar src={avatarUrl} />
                </ListItemAvatar>
                <ListItemText primary={fullname} secondary={`@${username}`} />
                {!access && (
                    <IconButton onClick={addPerson}>
                        <PersonAddIcon />
                    </IconButton>
                )}
            </ListItem>
        </Link>
    )
}

export default InfoMenuUserItem
