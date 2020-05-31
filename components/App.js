import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './menu/Menu.js'
//import Home from './components/pages/Home.js'
//import Blog from './components/pages/blog/Blog.js'
//import Projects from './components/pages/Projects.js'
//import Contact from './components/pages/Contact.js'

import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="app">
                <Router>
                    <div>
                        <Menu/>
                        <div className="target-page">
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/blog" exact component={Blog} />
                                <Route path="/store" exact component={Store} />
                                <Route path="/contact" exact component={Contact} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;