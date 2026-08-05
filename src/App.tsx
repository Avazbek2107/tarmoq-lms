import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import RequireAdmin from "./components/RequireAdmin";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Lesson from "./pages/Lesson";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminModules from "./pages/admin/AdminModules";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kirish" element={<SignIn />} />
        <Route path="/royxatdan-otish" element={<SignUp />} />

        <Route
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        >
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/foydalanuvchilar" element={<AdminUsers />} />
          <Route path="/admin/modullar" element={<AdminModules />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/kurs" element={<Catalog />} />
          <Route path="/kurs/:slug/:section?" element={<Lesson />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
