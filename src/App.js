import React, {useState,useContext} from "react";
import { Route, Switch , Redirect } from "react-router-dom";
import NavbarComponent from "./Components/Navbar";
import Products from "./Pages/Store";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ContactUs from "./Pages/Contactus";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";
import { AuthContext } from "./Store/authcontext";

// const router = createBrowserRouter([
//   {path:'/',element:<Home/>},
//   {path:'/store',element:<Products/>},
//   {path:'/about',element:<About/>}
// ])

function App() {
  const authctx = useContext(AuthContext)
  const [modalShow, setModalShow] = useState(false);
  const modalHandler = () =>{
    setModalShow(true)
  }
  return (
      <CartProvider>
        <NavbarComponent onshowmodal={modalHandler}/>
        <Switch>
        <Route path='/' exact><Home/></Route>
        <Route path='/store' exact>
          {authctx.isLoggedIn && <Products/>}
          {!authctx.isLoggedIn && <Redirect to='/login'/>}
        </Route>
        <Route path="/store/:productId">
          {authctx.isLoggedIn && <ProductDetails/>}
          {!authctx.isLoggedIn && <Redirect to='/login'/>}
          </Route>
        <Route path='/about'><About/></Route>
        <Route path='/contact'><ContactUs/></Route>
        {!authctx.isLoggedIn && <Route path='/login'><Login/></Route>} 
        <Route path='*'><Redirect to='/'/></Route>
        </Switch>
        <Cart
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </CartProvider>
  );
}

export default App;
