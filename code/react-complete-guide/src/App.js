import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "eq1",
      title: "Paper",
      amount: 94.12,
      date: new Date(2023, 6, 4),
    },
    {
      id: "eq2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 6, 4),
    },
    {
      id: "eq3",
      title: "House Insurance",
      amount: 22884.67,
      date: new Date(2023, 6, 4),
    },
    {
      id: "eq4",
      title: "Person Insurance",
      amount: 100.07,
      date: new Date(2023, 6, 4),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
