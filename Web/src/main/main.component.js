import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home.component'
import Autor from '../autor/autor.component'

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/autores' component={Autor} />
                    {/* <Route path='/editoras' component={Roster} />
                <Route path='/livros' component={Schedule} /> */}
                </Switch>
            </main>
        );
    }
}

export default Main;