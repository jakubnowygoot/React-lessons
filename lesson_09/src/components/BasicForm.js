import useBasicInput from "../hooks/use-basicInputs";


const BasicForm = () => {

    const {
        value: enteredName,
        hasError: nameHasError,
        isValid: enteredNameIsValid,
        enteredValueBlurHandler: enteredNameBlurHandler,
        enteredValueHandler: enteredNameHandler,
        reset: resetName,
    } = useBasicInput(value => value.trim() !== '');

    const {
        value: enteredLastName,
        hasError: lastNameHasError,
        isValid: enteredLastNameIsValid,
        enteredValueBlurHandler: enteredLastNameBlurHandler,
        enteredValueHandler: enteredLastNameHandler,
        reset: resetLastName,
    } = useBasicInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        hasError: emailHasError,
        isValid: enteredEmailIsValid,
        enteredValueBlurHandler: enteredEmailBlurHandler,
        enteredValueHandler: enteredEmailHandler,
        reset: resetEmail,
    } = useBasicInput(value => value.trim() !== '');

    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid){
        formIsValid = true;
    }

    const submitFormHandler = (event) => {
        event.preventDefault();

        if (!enteredNameIsValid) {
            return;
        }

        console.log('Submitted!');
        console.log(enteredName, enteredLastName, enteredEmail);

        resetName();
        resetLastName();
        resetEmail();
    };


    const nameChangeClassError = nameHasError ? 'form-control invalid' : 'form-control';
    const lastNameChangeClassError = lastNameHasError ? 'form-control invalid' : 'form-control';
    const emailChangeClassError = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={nameChangeClassError}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredName} onChange={enteredNameHandler} onBlur={enteredNameBlurHandler} />
            {nameHasError && <p className={'error-text'}>The name field cannot be left empty</p>}
        </div>
        <div className={lastNameChangeClassError}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' value={enteredLastName} onChange={enteredLastNameHandler} onBlur={enteredLastNameBlurHandler} />
            {lastNameHasError && <p className={'error-text'}>The last name field cannot be left empty</p>}
        </div>
      </div>
      <div className={emailChangeClassError}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' value={enteredEmail} onChange={enteredEmailHandler} onBlur={enteredEmailBlurHandler} />
          {emailHasError && <p className={'error-text'}>The email field cannot be left empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
