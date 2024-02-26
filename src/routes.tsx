// import { Routes, Route, useNavigate } from "react-router-dom";
// import MainPage from "../pages/MainPage/MainPage";
// import React from "react";
// import SignUp from "../pages/SignUpPage/SignUp";
// import SkeletonPage from "../pages/SkeletonPage/Skeleton";
// import SignIn from "../pages/SignInPage/SignIn";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
// import CategoryPages from "../pages/CategoryPages/CategoryPages";
// import MyTracks from "../pages/MyTracks/MyTracks";
// import { useEffect, useState } from "react";

// export const AppRoutes = () => {
//   const navigate = useNavigate();
//   const isAuth = !localStorage.getItem("user");

//   useEffect(() => {
//     if (!isAuth) {
//       navigate("/signin");
//     }
//   }, [isAuth, navigate]);

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Имитация задержки загрузки данных с сервера
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <SkeletonPage />
//       ) : (
//         <Routes>
//           {isAuth && <Route path="/" element={<MainPage />} />}
//           {isAuth && <Route path="/category/:id" element={<CategoryPages />} />}
//           {isAuth && <Route path="/favorites" element={<MyTracks />} />}
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       )}
//     </>
//   );
// };
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import IdPage from "./pages/IdPage/IdPage";
import CardPage from "./pages/CardPage/CardPage";
import NewCardPage from "./pages/NewCardPage/NewC/NewCardPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} index />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/user/:userId" element={<IdPage />} />
      <Route path="/card/:cardId" element={<CardPage />} />
      <Route path="/new-card" element={<NewCardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
