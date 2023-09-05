import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Trip } from "../../interfce/interfceTrip";
import "./Trips.css";
const Trips = () => {
  const [trips, setTrips] = useState<Trip[] | null>(null);
  const navigate = useNavigate();
  const getTrips = async () => {
    try {
      const res = await axios.get<Trip[]>("http://localhost:3000/api/trips");
      if (res.data) {
        const tripsFromServer: Trip[] = res.data;
        setTrips(tripsFromServer);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTrips();
  }, []);

  const divClik = (id: string) => {
    navigate(`/tripDetail/${id}`);
  };

  return (
    <>
      <div>all the trips</div>
      <Link to="/">
        <button> Return to home page </button>
      </Link>

      <Link to="NewTripForm">
        <button>to create a new trip</button>
      </Link>
      <div className="card">
        {trips?.map((trip) => {
          return (
            <div onClick={() => divClik(trip.id)}>
              <div
                style={{
                  height: "20rem",
                  width: "20rem",
                  border: "1px solid black",
                  margin: "1.2rem",
                  padding: ".4rem",
                }}
              >
                <div>
                  <img
                    src={trip.image}
                    style={{ width: "18rem", height: "auto" }}
                  />
                </div>
                <div> {trip.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Trips;
