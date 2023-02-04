// import logo from './logo.svg';
import "./App.css";
import { UserList } from './Components.js/UserList';
import { UserPhotos } from './Components.js/UserPhotos';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Components.js/Home";
import { Error } from "./Components.js/Error";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-black text-white">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          {/* <span className="navbar-brand" >Hidden brand</span> */}
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item ">
              <span className="nav-link text-white">
                <Link to="/" className="text-info">Home</Link>
              </span>
            </li>
            <li className="nav-item ">
              <span className="nav-link text-white">
                <Link to="/usergallery" className="text-info">User Gallery</Link>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link text-white">
                {" "}
                <Link to="/colorgallery" className="text-info">Color Gallery</Link>
                
              </span>
            </li>
            {/* <li className="nav-item">
        <span className="nav-link disabled" >Disabled</span>
      </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/usergallery" element={<UserList />}></Route>
        <Route exact path="/colorgallery" element={<UserPhotos />}></Route>
        {/* <Route exact path="/table" element={<Table />}></Route>
        <Route exact path="/contact/Name" element={<Name />}></Route> */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
