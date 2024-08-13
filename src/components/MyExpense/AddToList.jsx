import React, { useState } from 'react'



export const AddToList=(props)=>{
  const [date, setDate] = useState('');
  const[amount, setAmount] = useState('');
  const[title, setTitle] = useState('');
  const[category, setCategory] = useState('');
  const[details, setDetails] = useState('');
  const[paymentvia, setPaymentvia] = useState('');
  const[refId, setRefId] = useState('');

  const handleSave = (e)=>{
    e.preventDefault();
    const newExpense = {
      date,
      amount,
      title,
      category,
      details,
      paymentvia, 
      refId,
    };
    // console.log('date',date)
    // console.log('amount',amount)
    // console.log('title',title)
    // console.log('category',category)
    // console.log('details',details)
    // console.log('paymentvia',paymentvia)
    // console.log('refId',refId)

    props.setExpenses((prevExpense)=>[...prevExpense, newExpense])

    clearForm('');
  } 
    const clearForm = () => {
      setDate('');
      setAmount('');
      setTitle('');
      setCategory('');
      setDetails('');
      setPaymentvia('');
      setRefId('');
  }

  return (

    <div>
      <h1>add to list</h1>

      <form >
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
        <br /> <br />
        <input type='number' placeholder='Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <br /> <br />
        <input type="text" placeholder='Expense Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <br /> <br />
        <input type="text" placeholder='Category' value={category}  onChange={(e)=>setCategory(e.target.value)}/>
        <br /> <br />
        <input type="text" placeholder='More Details' value={details} onChange={(e)=>setDetails(e.target.value)}/>
        <br /> <br />
        <input type="text" placeholder='Payment via' value={paymentvia} onChange={(e)=>setPaymentvia(e.target.value)}/>
        <br /> <br />
        <input type="text" placeholder='To / Ref id' value={refId} onChange={(e)=>setRefId(e.target.value)}/>
        <br /> <br />

        <button type='submit' onClick={handleSave}>Save</button>
        <button type='button' onClick={clearForm}>cancel</button>

      </form>
    </div>
  )
}

export default AddToList
