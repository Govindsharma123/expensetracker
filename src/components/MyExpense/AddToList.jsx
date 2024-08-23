import React, { useState, useEffect } from 'react'
import { app, db } from '../../Firebase';
import { set, ref,  push, update } from 'firebase/database';



export const AddToList=(props)=>{
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Check if there is an expense to edit
    if (props.expenseToEdit) {
      setIsEditing(true);
      // Set form fields to the values of the expense to edit
      props.setDate(props.expenseToEdit.date);
      console.log('date',props.expenseToEdit.date)
      props.setAmount(props.expenseToEdit.amount);
      props.setTitle(props.expenseToEdit.title);
      props.setCategory(props.expenseToEdit.category);
      props.setDetails(props.expenseToEdit.details);
      props.setPaymentvia(props.expenseToEdit.paymentvia);
      props.setRefId(props.expenseToEdit.refId);
    } else {
      setIsEditing(false);
      // Clear the form if no expense is being edited
      clearForm();
    }
  }, [props.expenseToEdit]);

  const handleSave = async(e)=>{
    e.preventDefault();

      const newExpense = {
      date: props.date,
      amount: props.amount,
      title: props.title,
      category: props.category,
      details: props.details,
      paymentvia: props.paymentvia, 
      refId: props.refId,
    };

    try{
      if(isEditing && props.expenseToEdit){
        //update expense
        const expenseId = props.expenseToEdit.id;
        const dbRef = ref(db, `Expenses/${expenseId}`);
        await update(dbRef, newExpense);
        alert('expense updated successfully')

                // Update the item in the state array
                props.setExpenses((prevExpenses) =>
                  prevExpenses.map((expense) =>
                    expense.id === expenseId ? { ...expense, ...newExpense } : expense
                  )
                );
        

      }
      else{
        const newDocRef = push(ref(db, "Expenses"));

        set(newDocRef, newExpense).then(() =>{
        alert('data saved successfully');
        })
      
        props.setExpenses((prevExpense)=>[...prevExpense, newExpense]);
      }
        clearForm('');

      } 
      catch(error){
        alert('error in saving data ' + error.message);
      }
    
    }
    
  
  
  
    const clearForm = () => {
      props.setDate('');
      props.setAmount('');
      props.setTitle('');
      props.setCategory('');
      props.setDetails('');
      props.setPaymentvia('');
      props.setRefId('');

      setIsEditing(false); 
  }

  return (

    <div>
      <h1>{isEditing ? 'Edit Expense' : 'Add to List'}</h1>

      <form >
        <input type="date" value={props.date} onChange={(e)=>props.setDate(e.target.value)}/>
        <br /> <br />
        <input type='number' placeholder='Amount' value={props.amount} onChange={(e)=>props.setAmount(e.target.value)}/>
        <br /> <br />
        <input type="text" placeholder='Expense Title' value={props.title} onChange={(e)=>props.setTitle(e.target.value)}/>
        <br /> <br />
        <input type="text" placeholder='Category' value={props.category}  onChange={(e)=>props.setCategory(e.target.value)}/>
        <br /> <br />
        <input type="text" placeholder='More Details' value={props.details} onChange={(e)=>props.setDetails(e.target.value)}/>
        <br /> <br />
        <input type="text" placeholder='Payment via' value={props.paymentvia} onChange={(e)=>props.setPaymentvia(e.target.value)}/>
        <br /> <br />
        <input type="text" placeholder='To / Ref id' value={props.refId} onChange={(e)=>props.setRefId(e.target.value)}/>
        <br /> <br />

        <button type='submit' onClick={handleSave}>{isEditing ? 'Save Changes' : 'Save'}</button>
        <button type='button' onClick={clearForm}>cancel</button>

      </form>
    </div>
  )
}

export default AddToList
