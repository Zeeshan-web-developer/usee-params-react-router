import React from "react";
import User from "./User";
import Users from "./Users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/user/:id" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
