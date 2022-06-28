import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import BookAppoitment from "./pages/BookAppoitment";
import DoctorDetails from "./pages/DoctorDetails";
import Layout from "./component/UI/Layout";
import ShowAppoitment from "./pages/ShowAppoitment";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={"home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookAppoitment" element={<BookAppoitment />} />
        <Route path="/doctordetail/:userid" element={<DoctorDetails />} />
        <Route path="/ShowAppoitment" element={<ShowAppoitment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
