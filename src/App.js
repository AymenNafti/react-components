import logo from './logo.svg';
import './App.css';
import Photo from './Components/Profile/ProfilPhoto';
import Name from './Components/Profile/FullName';
import Addresse from './Components/Profile/Address';




function App() {
  return (
    <div className="App">
      <Photo/>
      <Name/>
      <Addresse/>
    </div>
  );
}

export default App;
