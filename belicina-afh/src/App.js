import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import Footer from './Footer';
import Rooms from './Rooms';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <div className="container"> */}
        <Routes>
          <Route path = "/" element = {<MainPage/>}/>
          <Route path = "rooms/" element = {<Rooms/>}/>
        </Routes>
      {/* </div> */}
      <Footer className="footer"/>
    </BrowserRouter>
  );
}

export default App;
