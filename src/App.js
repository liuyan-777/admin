import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Admin from './pages/Admin'
import Login from './pages/Login'

export default class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/admin" component={Admin}></Route>
                    <Route path="/" component={Login}></Route>
                </Switch>
            </>
        )
    }
}
