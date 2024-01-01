import { useState } from "react";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(() => {
    return initialState;
  });

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        value={formData.password}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Login;
