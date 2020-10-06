import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Result from "../result/result";
import Login from "../login/login";
import Lose from "../lose/lose";
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import PropTypes from 'prop-types';

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
        <Route exact path="/lose">
          <Lose />
        </Route>
        <Route exact path="/dev-artist">
          <Artist />
        </Route>
        <Route exact path="/dev-genre">
          <Genre />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

export default App;
