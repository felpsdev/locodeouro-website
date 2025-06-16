import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/home/index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
