
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Comps/Nav';
import Home from './Comps/Home';
import Login from './Comps/Login';
import Donation_Form from './Comps/Donation-Form';
import Login1 from './Comps/Login1';
import SignupPage from './Comps/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage1 from './Comps/SIGNUP1';

function App() {
  
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Login>

      </Login>
      <SignupPage>  </SignupPage>
      <Donation_Form></Donation_Form>

      <SignupPage1></SignupPage1>
        
        
        

<Login1></Login1>      
    </div>


  );
}

export default App;
