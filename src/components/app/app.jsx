import React from "react";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Result from "../result/result";
import Login from "../login/login";
import Lose from "../lose/lose";
import GameScreen from "../game-screen/game-screen";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {MAX_MISTAKE_COUNT, AppRoute} from "../../const";

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <WelcomeScreen
              errorsCount={MAX_MISTAKE_COUNT}
              onPlayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        >
        </Route>
        <Route exact
          path={AppRoute.LOGIN}
          render={({history}) => (
            <Login
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.RESULT}
          render={({history}) => {
            return (
              <Result
                onReplayButtonClick={() => history.push(AppRoute.GAME)}
              />
            );
          }}
        />
        <Route exact
          path={AppRoute.LOSE}
          render={({history}) => (
            <Lose
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}>
        </Route>
        <Route exact path={AppRoute.GAME}>
          <GameScreen
            errorsCount={MAX_MISTAKE_COUNT}
          />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

export default App;
