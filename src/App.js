import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom";

import {Home} from "./pages/home/Home";
import {Archive} from "./pages/archive/Archive";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
