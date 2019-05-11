import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from 'react-router-dom';

import indexRoutes from "./routes/index";
import "./assets/scss/paper-dashboard.scss";


const hist = createBrowserHistory();

class Dashboard extends React.Component {
  render() {
    return (
        <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
      </Router> 
    )
  }
}

export default Dashboard;