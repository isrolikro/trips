import React, { useState, ChangeEvent, useEffect } from "react";
import { Trip } from "../interfce/interfceTrip";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateTrip = () => {
  const { id } = useParams();
  const [tripData, setTripData] = useState<Trip>({
    id: "",
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    price: 0,
    image: "string",
    activities: [],
  });

  const navigate = useNavigate();
  useEffect(() => {
    console.log(id);
    
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/trips/${id}`
        );
        const data = res.data;
        console.log(data);
        setTripData(data);
      } catch (error) {
        console.error("error in retrieving the trip data: " + error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleSubmit = async (tripId: string) => {
    try {
      const config = {
        headers: {
          authorization: "test-token",
        },
      };

      await axios.put(
        `http://localhost:3000/api/trips/${tripId}`,
        tripData,
        config
      );

      // navigate(`/tripDetail/${tripId}`);
      navigate("/trips");
    } catch (err) {
      console.error("Error:" + err);
    }
  };

  return (
    <div>
      <h2>Updat a trip</h2>
      <div>
        <input
          type="text"
          placeholder="destination"
          name="destination"
          value={tripData.destination}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="date"
          placeholder="start Date"
          name="startDate"
          value={tripData.startDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="date"
          placeholder="end Date "
          name="endDate"
          value={tripData.endDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          placeholder="activities"
          name="activities"
          value={tripData.activities}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          placeholder="description"
          name="description"
          value={tripData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={tripData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="price"
          name="price"
          value={tripData.price}
          onChange={handleChange}
        />
      </div>

      <button onClick={() => handleSubmit(tripData.id)}>Update a trip</button>

      <Link to="/trips">
        <button>return</button>
      </Link>
    </div>
  );
};
export default UpdateTrip;
