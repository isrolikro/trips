import {Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Trips from "./components/Trips";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import UserLogin from "./components/UserLogin";
import NewTripForm from "./components/NewTripForm";
function Router():JSX.Element {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/trips/NewTripForm" element={< NewTripForm />} />
        <Route path="/Login" element={<UserLogin />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="*" element={<Home />} />
      </Routes>
  );
}
export default Router;
