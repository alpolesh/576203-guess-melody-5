import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Result from "../result/result";
import Login from "../login/login";
import Lose from "../lose/lose";
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
        <Route exact
          path="/result"
          render={({history}) => (
            <Result
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}>
        </Route>
        <Route exact
          path="/lose"
          render={({history}) => (
            <Lose
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}>
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

export default App;
