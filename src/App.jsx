import "./App.css";
import Header from "./Pages/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
export const DarkMode = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const styles = {
    body: {
      // backgroundColor: isDarkMode ? "white" : "black",
    },
  };
  return (
    <DarkMode.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className='body'>
        <div className='box' style={styles.body}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
            </Routes>{" "}
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </DarkMode.Provider>
  );
}

export default App;
