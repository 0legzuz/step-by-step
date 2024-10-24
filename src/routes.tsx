import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} index />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
