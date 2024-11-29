
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Comps/Nav';

import { BrowserRouter } from 'react-router-dom';
import Myrouter from './Myrouter';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>

      
      <MyNav></MyNav>

      <Myrouter></Myrouter>

      </BrowserRouter>
    </div>
  );
}

export default App;



