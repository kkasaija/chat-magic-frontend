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

  function handleInputChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="kasaija kenneth"
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="example@email.com"
      />

      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="**************"
      />

      <label htmlFor="confirm_password">Confirm Password</label>
      <input
        type="text"
        id="confirm_password"
        value={formData.confirm_password}
        onChange={handleInputChange}
        placeholder="**************"
      />
    </form>
  );
};

export default Register;
