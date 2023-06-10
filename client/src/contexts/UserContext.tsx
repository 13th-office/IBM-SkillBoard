import { SESSION_KEY } from "../../lib/constants";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext<UserContext>({} as UserContext);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState(localStorage.getItem(SESSION_KEY));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
