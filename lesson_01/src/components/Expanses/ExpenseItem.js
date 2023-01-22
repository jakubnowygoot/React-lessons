import React, { useState } from "react"
import ExpanseDate from "./ExpanseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

const ExpenseItem = (props) =>{
    const [title,setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Update');
        console.log(title);
    }

    return (
        <Card className={"expense-item"}>
            <ExpanseDate date={props.date}/>
            <div className={"expense-item__description"}>
                <h2>{title}</h2>
                <div className={"expense-item__price"}>${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>);
}

export default ExpenseItem;