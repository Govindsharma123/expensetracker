import React, { useState } from 'react'
import AddToList from '../../components/MyExpense/AddToList'
import ExpenseList from '../../components/MyExpense/ExpenseList'

const MyExpense = () => {
  const[expenses, setExpenses] = useState([]);
  // function ExpenseTracker() {
 

  //   const addExpense = (expense)=>{
  //     setExpenses([...expenses, expense])
  //   }
  // }
  return (
    <div>
      
    <AddToList setExpenses={setExpenses}/>
    <ExpenseList expenses={expenses}/>
    </div>
  )
}

export default MyExpense
