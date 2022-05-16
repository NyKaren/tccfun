import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddUser from "./Components/AddUser";
import UserTable from "./Components/UserTable";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={AddUser} />
        <Route exact path="/userTableView" component={UserTable} />
      </Router>
    );
  }
}

export default App;
