import { useState } from 'react';

const useInput = (ValidateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [valueTouched, setValueTouched] = useState(false);

    const enteredValueIsValid = ValidateValue(enteredValue);
    const hasError = !enteredValueIsValid && valueTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const isTouchedBlurHandler = () => {
        setValueTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setValueTouched(false);
    };

    return {
        value: enteredValue, hasError: hasError, valueChangeHandler, isTouchedBlurHandler, isValid: enteredValueIsValid, reset
    }
};

export default useInput;