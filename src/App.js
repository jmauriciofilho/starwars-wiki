import React, { Component } from 'react';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import TabelaPersonagens from './componentes/TabelaPersonagens';
import TabelaNaves from './componentes/TabelaNaves';
import TabelaPlanetas from './componentes/TabelasPlanetas';

import {Switch, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/personagens" component={TabelaPersonagens}/>
                        <Route path="/naves" component={TabelaNaves}/>
                        <Route path="/planetas" component={TabelaPlanetas}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
