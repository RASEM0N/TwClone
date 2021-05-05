import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'
import { TagType } from '../../store/bundles/tags'

interface PropsTypes extends TagType {}

const TagItem: React.FC<PropsTypes> = ({ name, count, _id }) => {
    return (
        <Link
            to={`/home/search?q=${name}`}
            style={{
                textDecoration: 'none',
                color: 'black',
            }}
        >
            <ListItem>
                <ListItemText primary={name} secondary={`Твитов: ${count}`} />
            </ListItem>
        </Link>
    )
}

export default TagItem
