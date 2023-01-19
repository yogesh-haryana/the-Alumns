import "./App.css";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Nav from "./conponents/Nav";
import Main from "./conponents/Main";
import AlumnsPage from "./conponents/AlumnsPage";
import AlumnForm from "./conponents/AlumnForm";
import Admin from "./conponents/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/"
            element={(
              <>
                <Nav />
                <Main />
              </>
            )}
          />
          <Route
            path="/ourAlumns"
            element={(
              <>
                <Nav />
                <AlumnsPage />
              </>
            )}
          />
          <Route
            path="/AreYouAnAlumni"
            element={(
              <>
                <Nav />
                <AlumnForm />
              </>
            )}
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
