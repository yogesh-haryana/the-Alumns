import "./App.css";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Nav from "./conponents/Nav";
import Main from "./conponents/Main";
import AlumnsPage from "./conponents/AlumnsPage";
import AlumnForm from "./conponents/AlumnForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ourAlumns" element={<AlumnsPage />} />
          <Route path="/AreYouAnAlumni" element={<AlumnForm />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
