import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const UserLogin: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const handleSubmit = async () => {
    try {
      const user = { email: email, password: password };

      const resp = await axios.post(`http://localhost:3000/api/auth/login`, user, {
        headers: { Authorization: "test-token" },
      });
      console.log(resp.data);
      

      navigate("/");
    } catch (error) {
      console.log("catch error " + error);
    }
  };
  return (
    <div>
      <h2>User Login</h2>
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



  export default UserLogin;