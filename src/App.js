import "./App.scss";
import "./responsive.scss";
import { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Partners from "./components/partners/Partners";
import Subscribe from "./components/subscribe/Subscribe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import ServicePage from "./pages/services/ServicePage";
import Contact from "./pages/contact/Contact";
import NewsPage from "./pages/news/NewsPage";
import ServiceInnerPage from "./pages/innerService/ServiceInnerPage";
import { fetcher } from "./utils/fetcher";
import Home from "./Home";

function App() {

  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const handler = async () => {
      const res = await fetcher("Menu");
      setMenu(res.data);
    };
    handler();
  }, []);
  
  return (
    <Router>
      <div className="main_container">
        <Partners />
        <div className="border">
          <Header menu={menu} />
          <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/services/:id" element={<ServiceInnerPage />}></Route>
              <Route exact path="/services" element={<ServicePage />}></Route>
              <Route path="/news" element={<NewsPage />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <Subscribe />
          <Footer menu={menu} />
        </div>
      </div>
    </Router>
  );
}

export default App;
