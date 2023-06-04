import Expenses from "./components/Expenses";

function App() {
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
