import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Trip } from "../../interfce/interfceTrip";

import "./Trips.css";

function AllInformationTrip(): JSX.Element {
  const [trip, setTrip] = useState<Trip[] | null>(()=> {
    getTrips(id)
  });
  const { id } = useParams();

  const getTrips = async (id:any) => {
    try {
      
      const res = await axios.get<Trip[]>(
        `http://localhost:3000/api/trips/${id}`
      );
      
      if (res.data) {
        setTrip(res.data)
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTrips(id);
  }, [id]);

  return (
    <div className="card">
      {trip?.map((trip) => {
        return (
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
            <div>{trip.id}</div>
            <div>{trip.startDate}</div>
            <div>{trip.destination}</div>
            <div>{trip.activities}</div>
            <div>{trip.description}</div>
            <div>{trip.endDate}</div>
            <div>{trip.name}</div>
            <div>{trip.price}</div>
          </div>
        );
      })}
    </div>
  );
}
export default AllInformationTrip;
