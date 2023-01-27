import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AcademyClass from "./Component/AcademyClass/AcademyClass";
import MathBooks from "./Component/Books/MathBooks";
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Book from "./Component/MozarSateSikho/Book";
import MozarSateSikho from './Component/MozarSateSikho/MozarSateSikho.jsx';
import Nevbar from './Component/Nevbar/Nevbar';
import Login from "./Component/Profile/Login";
import SingUp from "./Component/Profile/SingUp";
import ShohezeShikeBook from "./Component/ShohozeShikhe/ShohezeShikeBook";
import ShohozeShike from "./Component/ShohozeShikhe/ShohozeShike";
import UserProfile from "./Component/UserProfile/UserProfile";
function App() {
  return (
    <BrowserRouter>
     <Nevbar/>
    <Routes>
     <Route path="/MozarSateSikho" element={<MozarSateSikho/> }/>
     <Route path="/book" element={<Book/>}/>
     <Route path="/oneMathBook" element={<MathBooks/>}/>
     <Route path="/ShohozeShikhe" element={<ShohozeShike/>}/>
     <Route path="/ShohozeShikheBook" element={<ShohezeShikeBook/>}/>
     <Route path="/AcademyClass" element={<AcademyClass/> }/>
     <Route path="/SingUp" element={<SingUp/> }/>
     <Route path="/Login" element={<Login/> }/>
     <Route path="/Profile" element={<UserProfile/>}/>
    <Route path="/" element={<Home />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
