import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Mastery from './components/Mastery/Mastery';
import Services from './components/ServiceSec/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Mastery/>
      <Services/>
    </div>
  );
}

export default App;
