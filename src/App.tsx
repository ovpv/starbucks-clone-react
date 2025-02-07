import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { APP_MENU_LINKS } from "./components/common/header/menuLinks";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          {APP_MENU_LINKS.map((m) => (
            <Route element={<m.comp />} path={m.path} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
