import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {incrementStep, incrementMistake, resetGame} from "../../store/action";
import {GameType, MAX_MISTAKE_COUNT} from "../../const";
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";
import Mistakes from "../mistakes/mistakes";

const GenreWrapped = withAudioPlayer(withUserAnswer(Genre));
const ArtistWrapped = withAudioPlayer(Artist);

const GameScreen = (props) => {

  const {questions, step, onUserAnswer, mistakes} = props;
  const question = questions[step];
  if (mistakes >= MAX_MISTAKE_COUNT) {
    return (
      <Redirect to="/lose" />
    );
  }

  if (step >= questions.length || !question) {


    return (
      <Redirect to="/result" />
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
  onUserAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = ({GAME, DATA}) => ({
  step: GAME.step,
  mistakes: GAME.mistakes,
  questions: DATA.questions,
});

const mapDispatchToProps = (dispatch) => ({
  resetGameAction() {
    dispatch(resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(incrementStep());
    dispatch(incrementMistake(question, answer));
  }
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
