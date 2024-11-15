import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Comps/Nav';
import Home from './Comps/Home';
import Login from './Comps/Login';
import Donation_Form from './Comps/Donation-Form';
function App() {
  
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Login>

      </Login>
      <Donation_Form></Donation_Form>
      
    </div>
  );
}

export default App;
