import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import About from "../screens/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
