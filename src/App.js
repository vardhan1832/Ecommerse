import React from "react";
import NavbarComponent from "./Components/Navbar";
import Products from "./Components/Store";

function App() {
  return (
    <React.Fragment>
        <NavbarComponent/>
        <div style={{padding: '2rem',margin: '1rem 0rem', backgroundColor: '#8d948e'}}>
          <p style={{fontSize:'4rem',textAlign: "center",fontFamily: 'Georgia'}}>The Classics </p>
        </div>
        <Products/>
    </React.Fragment>
  );
}

export default App;
