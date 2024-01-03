import React, {useState} from "react";
import NavbarComponent from "./Components/Navbar";
import Products from "./Components/Store";
import Cart from "./Components/Cart/Cart";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const modalHandler = () =>{
    setModalShow(true)
  }
  return (
    <React.Fragment>
        <NavbarComponent onshowmodal={modalHandler}/>
        <div style={{padding: '2rem',margin: '1rem 0rem', backgroundColor: '#8d948e'}}>
          <p style={{fontSize:'4rem',textAlign: "center",fontFamily: 'Georgia'}}>The Classics </p>
        </div>
        <Products/>
        <Cart
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default App;
