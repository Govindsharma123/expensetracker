import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import AddToList from './components/MyExpense/AddToList';
// import ExpenseList from './components/MyExpense/ExpenseList';
import MyExpense from '../pages/MyExpense/MyExpense';
import Login from '../pages/Login/Login';


export const Router = () => {
  return (
    <Routes>
        <Route path='/home' element={<MyExpense />} />
        <Route path='/' element={<Login />}/>
    </Routes>
  )
}
