import React, { useState, useEffect } from 'react'
import { db } from '../../Firebase'
import { ref, get , update} from 'firebase/database'
//loader
import ClipLoader from 'react-spinners/ClipLoader';


const ExpenseList = (props) => {
  const [loading, setLoading] = useState(true);
  
 useEffect(()=>{
  const fetchData = async()=>{
    setLoading(true);
    try {
      const dbRef = ref(db, 'Expenses');
      const snapShot = await get(dbRef);

      console.log('snapshot', snapShot)

      if (snapShot.exists()) {
        const expensesData = Object.entries(snapShot.val()).map(([id, data])=>({
          id,
          ...data,
        }));

        console.log('expenses data', expensesData)
       
       
        console.log('keys', Object.keys(snapShot.val()));
        console.log('values', expensesData);

        props.setExpenses(expensesData); // Update parent state with fetched data
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };
  fetchData();
 },[]);

 const handleEdit = (expense) => {
  console.log('edit', expense)
  props.setExpenseToEdit(expense);
 }

 



// const handleChange = (e) => {
//   setEditedExpense({ ...editedExpense, [e.target.name]: e.target.value });
// };


  return (
    <div>
      <h1>expense list</h1>

    {loading ? (
      <div className='loading'>
        <ClipLoader size={40} color={"#007bff"} />
        <p>Loading...</p>
      </div>
    ):(
      <ul>
        {Object.entries(props.expenses).map(([id, expense]) =>(
          <li key={id}>
            <strong>{expense.title}</strong> {expense.category}: ₹{expense.amount} on {expense.date}
            <br />
            <small>{expense.details}</small>
            <br />
            payment via : {expense.paymentvia}, Ref: {expense.refId}

            <button onClick={() => handleEdit(expense)}>Edit</button>
            <br />
          </li>
        ))}
      </ul>
        )}
        </div>
      )} 
    


export default ExpenseList
