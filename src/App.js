
import './App.css';
import Navber from './pages/Shared/Navbar/Navber';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import Review from './pages/Home/Review';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Notfound from './pages/Notfound/Notfound';
import Addreview from './pages/Addreview/Addreview';

function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/review' element={<Addreview></Addreview>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
