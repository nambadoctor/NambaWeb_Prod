import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

enum RouterPathEnum {
  HOME = "/",
  ABOUT = "/about",
}

const routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<Dashboard />} path={RouterPathEnum.HOME} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default routing;
