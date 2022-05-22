import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import EditUser from "./Pages/EditUser";
import AddUser from "./Pages/AddUser";
import UserTable from "./Pages/UserTable";
import ManageActivity from "./Pages/ManageActivity";
import ActivityTable from "./Pages/ActivityTable";
import NavBar from "./Components/NavBar";
import NotFoundPage from './Components/NotFoundPage';

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
              <Route path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
          </Switch>
      </Router>
    );
  }
}

export default App;
