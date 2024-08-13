import React from 'react'

const ExpenseList = (props) => {
  

  return (
    <div>
      <h1>expense list</h1>

      <ul>
        {props.expenses.map((expense, index)=>(
          <li key={index}>
            <strong>{expense.title}</strong>{expense.category}: ${expense.amount} on {expense.date}
            <br />
            <small>{expense.details}</small>
              <br />
              <em>Paid via: {expense.paymentvia}, Ref: {expense.refId}</em>
              <br />
          </li>
        ))}
      </ul>
      

    </div>
  )
}

export default ExpenseList
