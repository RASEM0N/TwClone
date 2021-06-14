import React from 'react'
import PrimaryPage from './components/PrimaryPage'
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Authorization/Login'
import Register from './components/Authorization/Register'
import AuthVerify from './components/Authorization/AuthVerify'
import AuthRecovery from './components/Authorization/AuthRecovery'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, getUserStatus } from './store/user/user-selector'
import { DispatchType } from './store/store'
import { LoadingStateEnum } from './store/types'
import Spinner from './components/Common/Spinner'
import { backFetchUserAction } from './store/user/user-reducer'

const App = () => {
    const dispatch = useDispatch<DispatchType>()
    const loading = useSelector(getUserStatus)
    const history = useHistory()
    const user = useSelector(getUser)
    const auth = !!user

    React.useEffect(() => {
        dispatch(backFetchUserAction())
    }, [dispatch])

    React.useEffect(() => {
        if (loading === LoadingStateEnum.LOADING || loading === LoadingStateEnum.ERROR) return

        if (auth) {
            history.push('/home')
        } else {
            history.push('/')
        }
    }, [loading])

    return (
        <React.Fragment>
            {loading === LoadingStateEnum.LOADING ? (
                <div
                    style={{
                        height: '80vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Spinner size="12vw" />
                </div>
            ) : (
                <React.Fragment>
                    <Switch>
                        <Route path="/" component={PrimaryPage} exact />
                        {loading === LoadingStateEnum.LOADED && (
                            <Route path="/home" component={Home} />
                        )}
                        <Route path="/auth/login" component={Login} />
                        <Route path="/auth/verify" component={AuthVerify} />
                        <Route path="/auth/recovery" component={AuthRecovery} />
                        <Route path="/auth/register" component={Register} />
                    </Switch>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default App
