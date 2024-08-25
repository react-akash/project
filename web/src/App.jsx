import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={CustomerList} />
                <Route path="/add" component={CustomerForm} />
                {/* Add a route for editing customer */}
            </Switch>
        </Router>
    );
};

export default App;