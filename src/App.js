import "./App.scss";
import Header from "./components/header/Header";
import News from "./components/news/News";
import Partners from "./components/partners/Partners";
import Services from './components/services/Services';
import Subscribe from "./components/subscribe/Subscribe";

function App() {
  return (
    <div className="main_container">
      <Partners />
      <div className="border">
        <Header />
        <News />
        <Services />
        <Subscribe />
      </div>
    </div>
  );
}

export default App;
