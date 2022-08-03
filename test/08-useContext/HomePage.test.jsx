import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/components/08-useContext/context/UserContext";
import { HomePage } from "../../src/components/08-useContext/HomePage";

describe("test in <HomePage/>", () => {
  const user = {
    id: 1,
    name: "pepe",
  };

  test("should show the component with out user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();

    const preTag = screen.getByLabelText("pre"); //aria-label
    expect(preTag.innerHTML).toBe("null");
  });

  test("should show the component with the user", () => {
    render(
      <UserContext.Provider value={{ user: user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre"); //aria-label
    expect(preTag.innerHTML).toContain(user.name);
  });
});
