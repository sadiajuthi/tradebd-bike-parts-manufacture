import logo from './logo.svg';
import './App.css';
import Navber from './pages/Shared/Navbar/Navber';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Home></Home>
    </div>
  );
}

export default App;
