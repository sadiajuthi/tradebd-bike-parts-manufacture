
import './App.css';
import Navber from './pages/Shared/Navbar/Navber';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Notfound from './pages/Notfound/Notfound';
import Signup from './pages/Login/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import Myorder from './pages/Dashboard/Myorder';
import Myprofile from './pages/Dashboard/Myprofile';
import Myreview from './pages/Dashboard/Myreview';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import PlaceOrder from './PlaceOrder/PlaceOrder';
import Users from './pages/Dashboard/Users';

function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/order/:productId' element={<PlaceOrder></PlaceOrder>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route path='/dashboard' element={<Myorder></Myorder>}></Route>
          <Route path='myprofile' element={<Myprofile></Myprofile>}></Route>
          <Route path='myreview' element={<Myreview></Myreview>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>

      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
