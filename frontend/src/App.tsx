import { Route, Routes } from "react-router-dom";
import './index.css'
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/item" element={<ItemPage />} />
      </Routes>
      </div>
  );
}

export default App;
