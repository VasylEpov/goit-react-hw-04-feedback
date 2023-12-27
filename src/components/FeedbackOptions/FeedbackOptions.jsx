import PropTypes from 'prop-types';
import { Div, Btn } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <Div>
        {options.map(option => {
          return (
            <Btn
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
            >
              {option}
            </Btn>
          );
        })}
      </Div>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
