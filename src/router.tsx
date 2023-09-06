import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Trips from "./components/Trips/Trips";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import UserLogin from "./components/UserLogin";
import NewTrip from "./components/Trips/NewTrip";
import TripDetail from "./components/Trips/TripDetail";
import UpdateTrip from "./components/UpdateTrip";
function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<UserRegistration />} />
      <Route path="/trips/NewTrip" element={<NewTrip />} />
      <Route path="/Login" element={<UserLogin />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/tripDetail/:id" element={<TripDetail />} />
      <Route path="/UpdateTrip/:id" element={< UpdateTrip/>} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
export default Router;
