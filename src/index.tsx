import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

render(
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('root')
)
