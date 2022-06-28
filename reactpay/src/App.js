import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Service from "./pages/Service";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
