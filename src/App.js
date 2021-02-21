import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Route, Switch } from "react-router-dom";
import Home from "./PublicApp/Home_copy";
import { customTheme } from "./Components/Styles/Global/Theme";
import Login from "./PublicApp/Auth/Login/Login";
import AboutUs from "./PublicApp/Landing/AboutUs";
import Signup from "./PublicApp/Auth/Signup/Signup";
import MainRoute from "./ProtectedApp/routes/Main.routes";
import PrivateRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Switch>
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />
        <PrivateRoute path="/" component={MainRoute} />

        <Route path="*">
          {/* <NoMatch /> */}
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
