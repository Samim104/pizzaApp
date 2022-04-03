import './App.css';
import Main from './components/Main';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router , Routes , Link, Route } from 'react-router-dom';
function App() {
  return (
    <>
   <Navbar/>
   <Main/>
    </>
  );
}

export default App;
