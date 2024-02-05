import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Landscape from "./components/Landscape/Landscape";
import Mastery from "./components/Mastery/Mastery";
import Property from "./components/Property/Property";
import Services from "./components/ServiceSec/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Mastery />
      <Services />
      <Landscape />
      <Property />
      <Form />
    </div>
  );
}

export default App;
