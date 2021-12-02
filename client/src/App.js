import Home from "./pages/home/Home";
import {Routes, Route} from "react-router-dom"
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
