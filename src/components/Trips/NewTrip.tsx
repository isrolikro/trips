import React, { useState, ChangeEvent } from "react";
import { Trip } from "../../interfce/interfceTrip";
import { Link } from "react-router-dom";

const NewTrip: React.FC = () => {
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleSubmit = () => {

    setTripData({
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
  };

  return (
    <div>
      <h2>Create a trip</h2>
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
      <button onClick={handleSubmit}>Create a trip</button>
      <Link to="/trips">
        <button>return</button>
      </Link>
    </div>
  );
};
export default NewTrip;
