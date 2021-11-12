import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./component/Menu";
import Login from "./views/login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <Menu></Menu>
    <Routes>
    <Route path="/login" element={<Login />} />
       
      </Routes>
  </Router>
  );
}

export default App;
