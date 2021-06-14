import React from 'react'
import SideList from './SideList'
import SideUser from './SideUser'

const SideMenu: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <SideList />
            <SideUser />
        </React.Fragment>
    )
}

export default SideMenu
