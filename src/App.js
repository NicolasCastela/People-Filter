import Todolist from './components/Todolist';
import Header from './Header/Header';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Testando from './components/Select';


function App() {
  return (
    <div>
     <Router>
     <Header/>

    <Routes>
      <Route path="/todolist"  element={<Todolist/>}>
      </Route>
      <Route path="/testando"  element={<Testando/>}>
      </Route>
    </Routes>
      </Router> 
     

    </div>
  );
}

export default App;
