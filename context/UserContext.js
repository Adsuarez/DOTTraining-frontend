import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
  const [user, setUser] = useState(null);

  const updateUser = (userInfo) => {
    setUser(userInfo);
    return userInfo;
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
