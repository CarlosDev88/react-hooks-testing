import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const user = {
    id: 123,
    name: "pepe",
    email: "test@gmal.com",
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
