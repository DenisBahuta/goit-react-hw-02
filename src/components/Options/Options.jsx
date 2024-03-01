import PropTypes from "prop-types";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")} type='button'>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} type='button'>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} type='button'>
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button onClick={() => resetFeedback()} type='button'>
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
