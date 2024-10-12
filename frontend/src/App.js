import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import AppNavbar from "./layouts/Navbar";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Router>
        <AppNavbar />
        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
