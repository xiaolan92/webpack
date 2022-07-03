import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { Index2 } from '../views/index2/index';
import { Index3 } from '../views/index3/index';

const routes = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={ <App/> }></Route>
            <Route exact path="/index2/:id" element={ <Index2/> }></Route>
            <Route exact path="/index3" element={ <Index3/> }></Route>
        </Routes>
    </Router>
);
export default routes;
