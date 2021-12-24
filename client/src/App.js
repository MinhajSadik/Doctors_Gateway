import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
