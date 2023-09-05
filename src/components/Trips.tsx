import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Trips = () => {
 const [trips, settrips] = useState([])
  useEffect(()=> {

  },[])
  return (
    <>
      <div>all the trips</div>
      <Link to= '/'>
      <button> Return to home page </button> 
      </Link>

      <Link to = 'NewTripForm' >
        <button>to create a new trip</button>
      </Link>
    </>
  );
};

export default Trips;
