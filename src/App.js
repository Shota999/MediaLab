import "./App.scss";
import Header from "./components/header/Header";
import Partners from "./components/partners/Partners";

function App() {
  return (
    <div className="main_container">
      <Partners />
      <div className="border">
        <Header />
      </div>
    </div>
  );
}

export default App;
