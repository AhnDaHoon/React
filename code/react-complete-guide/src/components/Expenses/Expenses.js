import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHanldelr = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    let expenseContent = <p>No expenses found.</p>;
    if(filteredExpenses.length > 0){
      expenseContent = filteredExpenses.map((expense) => (
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ));
    }


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          seleted={filteredYear}
          onChangeFilter={filterChangeHanldelr}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;