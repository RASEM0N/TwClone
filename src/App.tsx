import React from 'react'
import Authorization from './components/Authorization/Authorization'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path='/auth' component={Authorization}/>
                <Route path='/' component={Home}/>
            </Switch>
        </div>
    )
}

export default App
