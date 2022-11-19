import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavCustom from './component/NavCustom';
import MainCst from './component/MainCst';

function App() {
  const name="Houssem Eddine Ayari" ;
  const profession = "Developper"
  return (
    <div className="App">
    <NavCustom />
    <MainCst name={name} profession={profession} />
    </div>
  );
}

export default App;
