import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
