import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Direction } from "./pages/Direction";
import { Performance } from "./pages/Performance";
import { Production } from "./pages/Production";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/direction" element={<Direction />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/production" element={<Production />} />
        </Routes>
      </Router>
    </div>
  );
}
