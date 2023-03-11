import "./App.scss";
import "./responsive.scss";
import { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import News from "./components/news/News";
import Partners from "./components/partners/Partners";
import Services from "./components/services/Services";
import Subscribe from "./components/subscribe/Subscribe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import ServicePage from './pages/services/ServicePage';

function App() {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetch("https://medialab-api.leavingstone.club/api/Menu", {
      method: "GET",
      headers: {
        "Accept-Language": "ka",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMenu(res.data);
      });
  }, []);

  return (
    <Router>
      <div className="main_container">
        <Partners />
        <div className="border">
          <Header menu={menu} />
          <Routes>
            <Route path="/" element={<News />}></Route>
          </Routes>
          <Routes>
            <Route path="/" element={<Services />}></Route>
          </Routes>
          <Routes>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          <Routes>
            <Route path="/services" element={<ServicePage />}></Route>
          </Routes>
          <Subscribe />
          <Footer menu={menu} />
        </div>
      </div>
    </Router>
  );
}

export default App;
