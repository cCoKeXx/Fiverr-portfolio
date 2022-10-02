
import './App.css';
import About from './components/About/About';
import Deliver from './components/Deliver/Deliver';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';


function App() {
  return (
    <div className="App">
        <Home/>
        <About/>
        <Products/>
        <Deliver/>
        <Footer/>
       
    </div>
  );
}

export default App;
