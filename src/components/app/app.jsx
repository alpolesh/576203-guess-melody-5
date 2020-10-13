import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Result from "../result/result";
import Login from "../login/login";
import Lose from "../lose/lose";
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import PropTypes from 'prop-types';
import GameScreen from "../game-screen/game-screen";

const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              errorsCount={errorsCount}
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
        <Route exact path="/dev-artist">
          <Artist
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/dev-genre">
          <Genre
            question={firstQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/game">
          <GameScreen
            errorsCount={errorsCount}
            questions={questions}
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
