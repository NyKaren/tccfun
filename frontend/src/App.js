import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditUser from "./Pages/EditUser";
import AddUser from "./Pages/AddUser";
import UserTable from "./Pages/UserTable";
import ManageActivity from "./Pages/ManageActivity";
import ActivityTable from "./Pages/ActivityTable";
import NavBar from "./Components/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
          <NavBar />
          <Switch>
              <Route exact path="/" component={ManageActivity} />
              <Route path="/activityTableView" component={ActivityTable} />
              <Route path="/addUser" component={AddUser} />
              <Route path="/userTableView" component={UserTable} />
              <Route path="/editUser" component={EditUser} />
              <Route path="/logout" component={UserTable} />
          </Switch>
      </Router>
    );
  }
}

export default App;
