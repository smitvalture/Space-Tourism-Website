import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
    </Routes>
  );
}

export default App;
