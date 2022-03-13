import React, { useState } from "react";

export const useInput = (inputFunction) => {
  const [enteredInput, setInteredInput] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);
  const onChangeHandler = (e) => {
    setInteredInput(e.target.value);
  };
  const inputBlurHandler = (e) => {
    setIsInputTouched(true);
  };
  let isInputValid = true;
  isInputValid = inputFunction(enteredInput);

  let inputHasError = false;
  let text = ''
  
  if (isInputValid && isInputTouched) {
    
    inputHasError = false;
  }
  if (!isInputValid && isInputTouched) {
    
    inputHasError = true;
  }
  let inputClass = "";
  if (isInputTouched) {
    if (inputHasError) {
      inputClass = "danger";
      text='invalid'

    } else {
      inputClass = "success";
      text='valid'
    }
  }

  return {
    enteredInput,
    onChangeHandler,
    inputBlurHandler,
    isInputValid,
    inputHasError,
    isInputTouched,
    inputClass,
    text
  };
};
