import React from 'react'
import { CircularProgress } from '@material-ui/core'

interface PropsTypes {
    size: number | string
    color?: 'primary' | 'secondary' | 'inherit' | undefined
}

const Spinner: React.FC<PropsTypes> = ({ size, color = undefined }) => {
    return (
        <CircularProgress
            color={color}
            style={{
                width: size,
                height: size,
            }}
        />
    )
}

export default Spinner
