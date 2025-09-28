import Header from "./components/Header";
import Footer from "./components/footer/Footer";
//import ClassHeader from "./components/ClassHeader";

import React from "react";
import Home from "./components/Home";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
