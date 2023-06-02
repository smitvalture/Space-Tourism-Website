import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Moon from "./pages/destination/Moon";
import Mars from "./pages/destination/Mars";
import Europa from "./pages/destination/Europa";
import Titan from "./pages/destination/Titan";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} >
        <Route path="moon" element={<Moon/>} />
        <Route path="mars" element={<Mars/>} />
        <Route path="europa" element={<Europa/>} />
        <Route path="titan" element={<Titan/>} />
      </Route>
    </Routes>
  );
}

export default App;
