import * as React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import MainLayout from "./Layout/MainLayout";
import Detail from "./Pages/Detail";
import About from "./Pages/About";
import Products from "./Pages/Pruducts";
import ProductDetail from "./Pages/PruductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element ={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/detail/:id" element={<Detail></Detail>} />
          <Route path="/pruducts" element={<Products></Products>} />
          <Route path="/productdetail/:id"element={<ProductDetail></ProductDetail>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App