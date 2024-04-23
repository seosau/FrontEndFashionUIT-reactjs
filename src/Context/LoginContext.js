import { createContext, useState } from "react";

const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const decodedToken = localStorage.getItem("decodedToken");
  const [isLogin, setIsLogin] = useState(decodedToken ? true : false);
  const data = {
    isLogin,
    setIsLogin,
  };
  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

export { LoginContext, LoginProvider };
