import React from "react";
import GlobalStyle from "./styles/global";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle/>
      <Navbar/>
      <Footer/>
    </div>
  );
};

export default App;
