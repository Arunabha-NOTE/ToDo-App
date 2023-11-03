import './App.css';
import Home from "../pages/Home";
import FourZeroFour from "../pages/FourZeroFour";
import Team from "../pages/Team";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<Team/>}/>
                  <Route path="/404" element={<FourZeroFour />} />
                  <Route path="/*" element={<FourZeroFour />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;