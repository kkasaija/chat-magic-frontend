import { useState } from "react";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(() => {
    return initialState;
  });

  console.log(formData);

  function handleInputChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="example@email.com"
      />

      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="**************"
      />
    </form>
  );
};

export default Login;
