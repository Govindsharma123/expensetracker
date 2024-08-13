import './App.css';
import { Routes, Route } from 'react-router-dom';
//component import
import AddToList from './components/MyExpense/AddToList';
import ExpenseList from './components/MyExpense/ExpenseList';
import MyExpense from './pages/MyExpense/MyExpense';
//pages import


function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path='/' element={<MyExpense />} />
      </Routes>
    </div>
  );
}

export default App;
