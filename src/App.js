import "./App.css";
import "./componets/Appname";
import Header from "./inc/Header";
import Login from "./componets/Login";
import Product from "./componets/Product";
import Register from "./componets/Register";
import UpdateProduct from "./componets/UpdateProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<Product />} />
          <Route path="/update" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
