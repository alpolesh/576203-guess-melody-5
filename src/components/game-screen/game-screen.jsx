import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {GameType} from "../../const";
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";
import Mistakes from "../mistakes/mistakes";

const GenreWrapped = withAudioPlayer(Genre);
const ArtistWrapped = withAudioPlayer(Artist);

const GameScreen = (props) => {

  const {questions, step, onUserAnswer, resetGame, mistakes} = props;
  const question = questions[step];

  if (step >= questions.length || !question) {
    resetGame();

    return (
      <Redirect to="/" />
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistWrapped
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>
        </ArtistWrapped>

      );
    case GameType.GENRE:
      return (
        <GenreWrapped
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>
        </GenreWrapped>
      );
    default:
      return (
        <Redirect to="/" />
      );
  }
};

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, answer));
  }
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
