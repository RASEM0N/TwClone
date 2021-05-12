import React from 'react'
import PrimaryPage from './components/PrimaryPage'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Authorization/Login'
import Register from './components/Authorization/Register'

const App = () => {
    // .... verify authorization
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" component={PrimaryPage} exact />
                <Route path="/home" component={Home} />
                <Route path="/auth/login" component={Login} />
                {/* <Route path="/auth/verify" component={Verify} /> */}
                {/* <Route path="/auth/recovery" component={Recovery} /> */}
                <Route path="/auth/register" component={Register} />
            </Switch>
        </React.Fragment>
    )
}

export default App
