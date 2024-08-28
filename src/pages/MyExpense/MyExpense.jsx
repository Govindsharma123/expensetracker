import React, { useState } from 'react'
import AddToList from '../../components/MyExpense/AddToList'
import ExpenseList from '../../components/MyExpense/ExpenseList'

const MyExpense = () => {
  const[expenses, setExpenses] = useState([]);
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  const[date, setDate] = useState('');
  const[amount, setAmount] = useState('');
  const[title, setTitle] = useState('');
  const[category, setCategory] = useState('');
  const[details, setDetails] = useState('');
  const[paymentvia, setPaymentvia] = useState('');
  const[refId, setRefId] = useState('');
  


  return (
    <div>
      
    <AddToList 
    expenses = {expenses}
    setExpenses={setExpenses}
    expenseToEdit={expenseToEdit} 
        date={date} setDate={setDate}
        amount={amount} setAmount={setAmount}
        title={title} setTitle={setTitle}
        category={category} setCategory={setCategory}
        details={details} setDetails={setDetails}
        paymentvia={paymentvia} setPaymentvia={setPaymentvia}
        refId={refId} setRefId={setRefId}
    />
    
    <ExpenseList 
    expenses={expenses} setExpenses={setExpenses}
    expenseToEdit={expenseToEdit} setExpenseToEdit={setExpenseToEdit}

    date={date} setDate={setDate}
    amount={amount} setAmount={setAmount}
    title={title} setTitle={setTitle}
    category={category} setCategory={setCategory}
    details={details} setDetails={setDetails}
    paymentvia={paymentvia} setPaymentvia={setPaymentvia}
    refId={refId} setRefId={setRefId}
    />
    </div>
  )
}

export default MyExpense
