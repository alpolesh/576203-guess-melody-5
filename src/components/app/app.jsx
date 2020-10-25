import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Result from "../result/result";
import Login from "../login/login";
import Lose from "../lose/lose";
import PropTypes from 'prop-types';
import GameScreen from "../game-screen/game-screen";
import {MAX_MISTAKE_COUNT} from "../../const";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              errorsCount={MAX_MISTAKE_COUNT}
              onPlayButtonClick={() => history.push(`/game`)}
            />
          )}
        >
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
        <Route exact path="/game">
          <GameScreen
            errorsCount={MAX_MISTAKE_COUNT}
          />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
