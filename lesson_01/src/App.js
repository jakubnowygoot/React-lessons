import Expanses from "./components/Expanses/Expanse";
import NewExpanses from "./components/NewExpanses/NewExpanses";

function App() {
    const expanses = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 245,
            date: new Date(2020, 5, 2),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 144.23,
            date: new Date(2021, 4, 12),
        },
        {
            id: "e3",
            title: "New Car",
            amount: 2000,
            date: new Date(2022, 12, 29),
        },
        {
            id: "e4",
            title: "Car Insurance",
            amount: 120.23,
            date: new Date(2021, 2, 14),
        }
    ];
    return (
        <div>
            <NewExpanses/>
            <Expanses items={expanses}/>
        </div>
    );
}

export default App;