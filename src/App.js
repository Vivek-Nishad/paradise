import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchModal from "./components/SearchModal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blogDetails" element={<BlogDetails />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/rooms" element={<Rooms />}></Route>
            <Route path="/roomDetails" element={<RoomDetails />}></Route>
          </Routes>
          <Footer />
          <SearchModal />
        </Router>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
