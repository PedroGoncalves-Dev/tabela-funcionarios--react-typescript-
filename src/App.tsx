import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import Cabecalho from "./components/cabecalho/cabecalho";
import RodaPe from "./components/roda-pe/roda-pe";
import Home from "./pages/home";

const LayoutMain = () => {
  return (
    <>
      <Cabecalho />
      <main className="min-h-[calc(100vh-3.5rem)]">
        <Outlet />
      </main>
      <RodaPe />
    </>
  );
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutMain />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
