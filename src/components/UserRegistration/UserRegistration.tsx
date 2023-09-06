import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegistration: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const handleSubmit = async () => {
    try {
      const user = { email: email, password: password, role: "admin" };

      const resp = await axios.post(`http://localhost:3000/api/auth/register`, user, {
        headers: { Authorization: "test-token" },
      });
      console.log(resp.data);
      

      navigate("/login");
    } catch (error) {
      console.log("catch error " + error);
    }
  };
  return (
    <div>
      <h2>User Registration</h2>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
};

export default UserRegistration;
