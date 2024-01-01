import { useState } from "react";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const [formData, setFormData] = useState(() => {
    return initialState;
  });

  function handleInputChange() {}

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={handleInputChange}
      />

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

      <label htmlFor="confirm_password">Name</label>
      <input
        type="text"
        id="confirm_password"
        value={formData.confirm_password}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Register;
