import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import { Logout } from "./auth/Logout";
import { Login } from "./auth/Login";
import { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites";
import SearchBar from "./components/SearchBar";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <Fragment>
            <ul class="nav">
              <li class="nav-item">
                <Link to="/favorites">
                  <a class="nav-link active" aria-current="page" href="#">
                    Favoritos
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/home">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Logout">
                  <a class="nav-link active" aria-current="page" href="#">
                    Logout
                  </a>
                </Link>
              </li>
            </ul>
          </Fragment>
        ) : (
          <Login />
        )}
      </header>
      <Routes>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/home" element={<SearchBar />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </div>
  );
}

export default App;