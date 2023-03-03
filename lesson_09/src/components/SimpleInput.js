import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
    const {
        value: enteredName,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        isTouchedBlurHandler: nameBlurHandler,
        isValid: enteredNameIsValid,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        hasError: emailValueHasError,
        valueChangeHandler: emailChangeHandler,
        isTouchedBlurHandler: emailBlurHandler,
        isValid: enteredEmailIsValid,
        reset: resetEmailInput
    } = useInput(value => value.trim() !== '');

    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid){
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);
        console.log(enteredEmail);

        resetNameInput();
        resetEmailInput();
    }

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const EmailInputClasses = emailValueHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={nameChangeHandler} value={enteredName}
                       onBlur={nameBlurHandler}/>
                {nameInputHasError && <p className={'error-text'}>Name must not be empty</p>}
            </div>
            <div className={EmailInputClasses}>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' onChange={emailChangeHandler} value={enteredEmail}
                       onBlur={emailBlurHandler}/>
                {emailValueHasError && <p className={'error-text'}>Email must not be empty </p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;