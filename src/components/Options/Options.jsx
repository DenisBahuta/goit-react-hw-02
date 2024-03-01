import PropTypes from "prop-types";
import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.btnContainer}>
      <button
        className={css.feedBackBtn}
        onClick={() => updateFeedback("good")}
        type='button'
      >
        Good
      </button>
      <button
        className={css.feedBackBtn}
        onClick={() => updateFeedback("neutral")}
        type='button'
      >
        Neutral
      </button>
      <button
        className={css.feedBackBtn}
        onClick={() => updateFeedback("bad")}
        type='button'
      >
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button
          className={css.feedBackBtn}
          onClick={() => resetFeedback()}
          type='button'
        >
          Reset
        </button>
      ) : null}
    </div>
  );
};

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
