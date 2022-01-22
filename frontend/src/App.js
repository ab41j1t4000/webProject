import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
  <div>
    <Router history={history}>
    <div className="container">
    <Routes>
    <Route path="/" exact={true} element={<ListEmployeeComponent />} />
    <Route path="/employees" exact={true} element={<ListEmployeeComponent />} />
    <Route path="/add-employee" exact={true} element={<CreateEmployeeComponent />} />

    </Routes>
    </div>
    </Router>
</div>
  );
}

export default App;
