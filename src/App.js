import './App.css';
import { Routes, Route } from 'react-router-dom';
//component import
import AddToList from './components/MyExpense/AddToList';
import ExpenseList from './components/MyExpense/ExpenseList';
import MyExpense from './pages/MyExpense/MyExpense';
import Login from './pages/Login/Login';
//pages import


function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path='/home' element={<MyExpense />} />
        <Route path='/' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
