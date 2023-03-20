import './App.css';
import Api from './components/Api';
import Header from './components/Header';
import Footer from './components/Footer';
import Boton from './components/Boton';
import Sobremi from './components/Sobremi';
import Formulario from './components/Formulario';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1> P O R F O L I O </h1>
      </div>
      <Header />
      <Sobremi />
      <Api />
      <Boton />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
