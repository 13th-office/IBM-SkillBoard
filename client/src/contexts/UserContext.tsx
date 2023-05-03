import { SESSION_KEY } from "../../lib/constants";
import { useState } from "react";
import { createContext } from "react";

interface UserContext {
  user: string | null;
  setUser: (sessionToken: string | null) => void;
}
interface Props {
  children: React.ReactNode;
}

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
