import React, { useState, useEffect } from 'react';
import { app, db } from '../../Firebase';
import { set, ref, push, update } from 'firebase/database';

export const AddToList = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (props.expenseToEdit) {
      setIsEditing(true);
      props.setDate(props.expenseToEdit.date);
      props.setAmount(props.expenseToEdit.amount);
      props.setTitle(props.expenseToEdit.title);
      props.setCategory(props.expenseToEdit.category);
      props.setDetails(props.expenseToEdit.details);
      props.setPaymentvia(props.expenseToEdit.paymentvia);
      props.setRefId(props.expenseToEdit.refId);
    } else {
      setIsEditing(false);
      clearForm();
    }
  }, [props.expenseToEdit]);

  const handleSave = async (e) => {
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

    try {
      if (isEditing && props.expenseToEdit) {
        const expenseId = props.expenseToEdit.id;
        const dbRef = ref(db, `Expenses/${expenseId}`);
        await update(dbRef, newExpense);
        alert('Expense updated successfully');

        props.setExpenses((prevExpenses) =>
          prevExpenses.map((expense) =>
            expense.id === expenseId ? { ...expense, ...newExpense } : expense
          )
        );
      } else {
        const newDocRef = push(ref(db, "Expenses"));
        set(newDocRef, newExpense).then(() => {
          alert('Data saved successfully');
        });

        props.setExpenses((prevExpense) => [...prevExpense, newExpense]);
      }
      clearForm('');
    } catch (error) {
      alert('Error in saving data: ' + error.message);
    }
  };

  const clearForm = () => {
    props.setDate('');
    props.setAmount('');
    props.setTitle('');
    props.setCategory('');
    props.setDetails('');
    props.setPaymentvia('');
    props.setRefId('');

    setIsEditing(false);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    props.setCategory(value);

    if (value) {
      const matchingCategories = props.expenses
        .map((expense) => expense.category)
        .filter(
          (category) =>
            category.toLowerCase().includes(value.toLowerCase())
        );

      setFilteredCategories(matchingCategories);
      setShowDropdown(matchingCategories.length > 0);
    } else {
      setShowDropdown(false);
    }
  };

  const handleCategorySelect = (category) => {
    props.setCategory(category);
    setShowDropdown(false);
  };

  return (
    <div>
      <h1>{isEditing ? 'Edit Expense' : 'Add to List'}</h1>

      <form>
        <input type="date" value={props.date} onChange={(e) => props.setDate(e.target.value)} />
        <br /><br />
        <input type="number" placeholder="Amount" value={props.amount} onChange={(e) => props.setAmount(e.target.value)} />
        <br /><br />
        <input type="text" placeholder="Expense Title" value={props.title} onChange={(e) => props.setTitle(e.target.value)} />
        <br /><br />
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Category"
            value={props.category}
            onChange={handleCategoryChange}
          />
          {showDropdown && (
            <ul style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              border: '1px solid #ccc',
              listStyleType: 'none',
              padding: 0,
              margin: 0,
              zIndex: 10,
              backgroundColor: '#fff'
            }}>
              {filteredCategories.map((category, index) => (
                <li
                  key={index}
                  style={{ padding: '5px', cursor: 'pointer' }}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={() => alert(`Add new category: ${props.category}`)}
            style={{
              marginLeft: '10px',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              color: '#007bff',
              fontSize: '1.5em',
            }}
          >
            +
          </button>
        </div>
        <br /><br />
        <input type="text" placeholder="More Details" value={props.details} onChange={(e) => props.setDetails(e.target.value)} />
        <br /><br />
        <input type="text" placeholder="Payment via" value={props.paymentvia} onChange={(e) => props.setPaymentvia(e.target.value)} />
        <br /><br />
        <input type="text" placeholder="To / Ref id" value={props.refId} onChange={(e) => props.setRefId(e.target.value)} />
        <br /><br />

        <button type="submit" onClick={handleSave}>{isEditing ? 'Save Changes' : 'Save'}</button>
        <button type="button" onClick={clearForm}>Cancel</button>
      </form>
    </div>
  );
};

export default AddToList;
