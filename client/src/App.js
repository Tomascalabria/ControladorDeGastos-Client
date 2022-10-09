
import { NavBar } from './components/NavBar/NavBar';
import { Routes,Route} from 'react-router-dom'
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { AuthContext } from './Context/AuthContext';
import { useContext } from 'react';
import { ExpensesList } from './components/ItemList/ExpensesList';
import { CreateExpense } from './components/CreateExpense/CreateExpense';

function App() {
const {user}=useContext(AuthContext)
  return (
    
    <div className="App">
      
<NavBar/>
<Routes>
  <Route path='/' element={<ExpensesList/>}></Route>
   
   {!user?<Route path='/login' element={<Login/>}></Route>:<></>}
  <Route path='/register' element={<Register/>}></Route>
    
    <Route path='/gastos/crear' element={<CreateExpense/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
