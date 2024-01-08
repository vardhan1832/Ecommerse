import React, {useState} from "react";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Route } from "react-router-dom";
import NavbarComponent from "./Components/Navbar";
import Products from "./Pages/Store";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ContactUs from "./Pages/Contactus";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import ProductDetails from "./Pages/ProductDetails";

// const router = createBrowserRouter([
//   {path:'/',element:<Home/>},
//   {path:'/store',element:<Products/>},
//   {path:'/about',element:<About/>}
// ])

function App() {
  const [modalShow, setModalShow] = useState(false);
  const modalHandler = () =>{
    setModalShow(true)
  }
  return (
      <CartProvider>
        <NavbarComponent onshowmodal={modalHandler}/>
        <Switch>
        <Route path='/' exact><Home/></Route>
        <Route path='/store' exact><Products/></Route>
        <Route path="/store/:productId"><ProductDetails/></Route>
        <Route path='/about'><About/></Route>
        <Route path='/contact'><ContactUs/></Route>
        </Switch>
        <Cart
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </CartProvider>
  );
}

export default App;
