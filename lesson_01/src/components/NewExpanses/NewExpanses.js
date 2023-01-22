import ExpenseForm from "./ExpenseForm";
import "./NewExpanses.css";

const NewExpaneses = (props) => {

    const saveExpanseDataHandler = (enteredExpanseDate) => {
        const expanseData = {
            ...enteredExpanseDate,
            id: Math.random().toString()
        }
        props.onAddExpanse(expanseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpanseData={saveExpanseDataHandler}/>
    </div>
}

export default NewExpaneses;