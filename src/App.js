import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import About from "./pages/About/About"
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/products' exact component={Products} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
