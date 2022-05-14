import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <ToastContainer />
      <Switch>
        <Route exact path="/" component={() => <Home />} />

        <Route path="/add">
          <AddContact />
        </Route>
        <Route path="/edit/:id">
          <EditContact />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
