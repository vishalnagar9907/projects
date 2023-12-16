import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Header';
import BuyCars from './BuyCars';
import './App.css';
import AddCar from './BuyCars/components/AddCar';
import CarDetail from "./BuyCars/components/CarDetail.js";
import Login from "./LoginPage";
import SignUp from "./LoginPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
  
      
      <Route path="/" exact element={<BuyCars />} />
      <Route path="/login"  element={<Login />} />
      <Route path="/signup"  element={<SignUp />} />
      <Route path="/add-car" element={<AddCar />} />

      <Route path="car-detail/:id" element={<CarDetail />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
