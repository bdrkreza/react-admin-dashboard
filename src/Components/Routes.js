import React from "react";
import { Route, Switch } from "react-router-dom";
import Customers from "../Pages/Customers/Customers";
import Dashboard from "../Pages/Dashboard/Dashboard";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/customers" component={Customers} />
      </Switch>
    </div>
  );
}
