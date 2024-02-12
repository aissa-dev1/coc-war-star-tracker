import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WarLogs from "./pages/WarLogs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/war-logs" element={<WarLogs />} />
    </Routes>
  );
}
