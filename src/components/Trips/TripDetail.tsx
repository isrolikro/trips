import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Trip } from "../../interfce/interfceTrip";
import "./Trips.css";
function AllInformationTrip(): JSX.Element {
  const [trips, setTrips] = useState<Trip[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Selected ID:", id);
    const getTrips = async () => {
      console.log("Fetching trips...");
      try {
        const res = await axios.get<Trip>(
          `http://localhost:3000/api/trips/${id}`
        );
        if (res.data) {
          console.log("Received data:", res.data);
          setTrips([res.data]);
        }
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };
    getTrips();
  }, [id]);

  const deleteTrip = async (tripId: number) => {
    try {
      const config = {
        headers: {
          authorization: "test-token",
        },
      };

      await axios.delete(`http://localhost:3000/api/trips/${tripId}`, config);

      navigate("/trips");
    } catch (err) {
      console.error("Error:" + err);
    }
  };

  return (
    <div className="card">
      {trips.map((trip) => (
        <div
          key={trip.id}
          style={{
            height: "20rem",
            width: "20rem",
            border: "1px solid black",
            margin: "1.2rem",
            padding: ".4rem",
          }}
        >
          <img
            src={trip.image}
            style={{ width: "18rem", height: "auto" }}
            alt={`Image for ${trip.destination}`}
          />
          <div>{trip.id}</div>
          <div>{trip.startDate}</div>
          <div>{trip.destination}</div>
          <div>{trip.activities}</div>
          <div>{trip.description}</div>
          <div>{trip.endDate}</div>
          <div>{trip.name}</div>
          <div>{trip.price}</div>
          <div>
            <button onClick={() => deleteTrip(Number(trip.id))}>
              Delete Trip
            </button>
            <Link to="/trips">
              <button>return</button>
            </Link>
            <Link to={`/UpdateTrip/${trip.id}`}>
              <button>Update Trip</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AllInformationTrip;
