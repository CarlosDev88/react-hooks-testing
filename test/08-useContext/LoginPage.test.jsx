import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/components/08-useContext/context/UserContext";
import { LoginPage } from "../../src/components/08-useContext/LoginPage";

describe("test in <LoginPage/>", () => {
  test("should show the component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre"); //aria-label
    expect(preTag.innerHTML).toBe("null");
  });

  test("should call the setUser when it is called", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalled();

    expect(setUserMock).toHaveBeenCalledWith({
      email: "juan@gmail.com",
      id: 123,
      name: "juan",
    });
  });
});
