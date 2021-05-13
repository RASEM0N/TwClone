import React from 'react'
import PrimaryPage from './components/PrimaryPage'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Authorization/Login'
import Register from './components/Authorization/Register'
import AuthVerify from './components/Authorization/AuthVerify'
import AuthRecovery from './components/Authorization/AuthRecovery'

const App = () => {
    // .... verify authorization
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" component={PrimaryPage} exact />
                <Route path="/home" component={Home} />
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/verify" component={AuthVerify} />
                <Route path="/auth/recovery" component={AuthRecovery} />
                <Route path="/auth/register" component={Register} />
            </Switch>
        </React.Fragment>
    )
}

export default App
