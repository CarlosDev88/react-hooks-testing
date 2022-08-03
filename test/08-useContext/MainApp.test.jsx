import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/components/08-useContext/MainApp";

describe("test in <MainApp/>", () => {
  test("should show HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("Home Page")).toBeTruthy();
  });

  test("should show LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("Login Page")).toBeTruthy();
  });
});
