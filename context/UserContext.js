import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
  const [user, setUser] = useState(null);

  const updateUser = (userInfo) => {
    setUser(userInfo);
    return userInfo;
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedDOTTrainingUser");
    if (loggedUserJSON) {
      const userInfo = JSON.parse(loggedUserJSON);
      updateUser(userInfo);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
