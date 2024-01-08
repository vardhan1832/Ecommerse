import React, {useState} from "react";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Route } from "react-router-dom";
import NavbarComponent from "./Components/Navbar";
import Products from "./Components/Store";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import About from "./Components/About";
import Home from "./Components/Home";
import ContactUs from "./Components/Contactus";

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
        <div style={{padding: '1.45rem',margin: '5rem 0rem 0rem 0rem', backgroundColor: '#8d948e'}}>
          <p style={{fontSize:'3.4rem',textAlign: "center",fontFamily: 'Georgia'}}>The Classics </p>
        </div>
        <Route path='/' exact><Home/></Route>
        <Route path='/store'><Products/></Route>
        <Route path='/about'><About/></Route>
        <Route path='/contact'><ContactUs/></Route>
        <Cart
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </CartProvider>
  );
}

export default App;
