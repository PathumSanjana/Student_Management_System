import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/edituser/:id" element={<EditUser/>}/>
        </Routes>
        
      </Router>
        
      
    </div>
  );
}

export default App;
