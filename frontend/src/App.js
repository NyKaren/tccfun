import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./Pages/AddUser";
import UserTable from "./Pages/UserTable";
import ManageActivity from "./Pages/ManageActivity";
import NavBar from "./Components/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
          <NavBar />
          <Switch>
              <Route exact path="/" component={ManageActivity} />
              <Route path="/addUser" component={AddUser} />
              <Route path="/userTableView" component={UserTable} />
              <Route path="/logout" component={UserTable} />
          </Switch>
      </Router>
    );
  }
}

export default App;
