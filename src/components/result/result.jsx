import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const Result = (props) => {
  const {questionsCount, mistakesCount, onReplayButtonClick, resetGame} = props;
  const correctlyQuestionsCount = questionsCount - mistakesCount;

  return (
    <main className="app">
      <section className="main" id="root">
        <section className="result">
          <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
          <h2 className="result__title">Вы настоящий меломан!</h2>
          <p className="result__total">Вы ответили правильно на {correctlyQuestionsCount} вопросов и совершили {mistakesCount} ошибки</p>
          <button
            onClick={() => {
              resetGame();
              onReplayButtonClick();
            }}
            className="replay"
            type="button">
              Сыграть ещё раз
          </button>
        </section>
      </section>
    </main>
  );
};

Result.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) =>({
  questionsCount: state.step,
  mistakesCount: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});

export {Result};
export default connect(mapStateToProps, mapDispatchToProps)(Result);
