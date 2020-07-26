import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Route, Switch } from "react-router-dom";
import Home from "./PublicApp/Home";
import { customTheme } from "./Components/Styles/Global/Theme";
import Login from "./PublicApp/Auth/Login/Login";
import AboutUs from "./PublicApp/Landing/AboutUs";
import Signup from "./PublicApp/Auth/Signup/Signup";
import ProtectedApp from "./ProtectedApp";

function App(props) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Switch>
        <Route path="/about" component={AboutUs} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
        <Route
          path="/dashboard"
          render={(props) => <ProtectedApp {...props} />}
        />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
