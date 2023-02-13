import logo from './logo.svg';
import './App.css';
import { Homepage } from './Components/Homepage';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Account } from './Components/Account';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
     <Homepage/>
     <Footer/> */}

     <Account/>
    </div>
  );
}

export default App;
