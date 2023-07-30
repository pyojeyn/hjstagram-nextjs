import { useReducer } from "react";

export const INPUT_STATES = {
  INPUT: "INPUT",
  BLUR: "BLUR",
  RESET: "RESET",
};

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === INPUT_STATES.INPUT) {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }

  if (action.type === INPUT_STATES.BLUR) {
    return {
      isTouched: true,
      value: state.value,
    };
  }

  if (action.type === INPUT_STATES.RESET) {
    return {
      isTouched: false,
      value: "",
    };
  }

  return {
    value: "",
    isTouched: false,
  };
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: INPUT_STATES.INPUT, value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: INPUT_STATES.BLUR });
  };

  const reset = () => {
    dispatch({ type: INPUT_STATES.RESET });
  };

  return {
    value: inputState.value,
    isValid: validateValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
