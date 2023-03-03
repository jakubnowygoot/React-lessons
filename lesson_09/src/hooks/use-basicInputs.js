import { useState } from 'react';

const useBasicInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const enteredValueIsValid = validateValue(enteredValue);
    const hasError = !enteredValueIsValid && isTouched;

    const enteredValueHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const enteredValueBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };
    return{
        value: enteredValue,
        hasError: hasError,
        isValid: enteredValueIsValid,
        enteredValueBlurHandler,
        enteredValueHandler,
        reset,
    }

};


export default useBasicInput