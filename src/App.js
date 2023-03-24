import './App.css';
import Api from './components/Api';
import Header from './components/Header';
import Footer from './components/Footer';
import Sobremi from './components/Sobremi';
import Formulario from './components/Formulario';
import Iconos from './components/Iconos';
import Titulo from './components/Titulo';

function App() {

  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1 className='titular'> Mila Galiano </h1>
      </div>
      <Header />
      <Sobremi />
      <Titulo />
      <Api />
      <Iconos />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
