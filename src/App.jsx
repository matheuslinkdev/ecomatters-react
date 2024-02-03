import { Outlet, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Outlet />
          </Routes>
        </Router>
    </>
  );
}

export default App;
