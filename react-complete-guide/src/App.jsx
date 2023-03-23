import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "94.12",
      date: new Date(2020, 7, 8)
    },
    {
      id: "e2",
      title: "New TV",
      amount: "799.19",
      date: new Date(2021, 2, 28)
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: "297.56",
      date: new Date(2021, 5, 17)
    },
    {
      id: "e4",
      title: "Groceries",
      amount: "120.55",
      date: new Date(2020, 9, 8)
    }
  ];

  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses items={ expenses} />
    </div>
  );
}

export default App;
