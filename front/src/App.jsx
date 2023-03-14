import React, { useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ProfilePage from "./pages/ProfilePage";
import AddPostPage from "./pages/AddPostPage";
import BlogsPage from "./pages/BlogsPage";
import PregCalcPage from "./pages/PregCalcPage";
import OvulationCalcPage from "./pages/OvulationCalcPage";
import { useAuth } from "./Providers/AuthProvider";
import { getToken } from "./utils/apiCalls";
import { parseJwt } from "./utils/converter";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import DoctorBookingPage from "./pages/DoctorBookingPage";

function App() {
  const { setAuth, setAuthUser } = useAuth();
  useEffect(() => {
    const token = getToken();

    if (!token) return;
    setAuth(true);
    setAuthUser(parseJwt(token));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts">
          <Route index element={<PostListPage />} />
          <Route path=":id" element={<PostPage />} />
          <Route path="add" element={<AddPostPage />} />
        </Route>
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/confirm" element={<ConfirmationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        {/* <Route path="/pregnancycalculator" element={<PregCalcPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ovulationCalc" element={<OvulationCalcPage />} />
        <Route path="/booking" element={<DoctorBookingPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div className="font-main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
