import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("test in <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show initial component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: null,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    // screen.debug();
  });

  test("should show a quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "test", quote: "hola mundo" }],
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("hola mundo")).toBeTruthy();
    expect(screen.getByText("test")).toBeTruthy();

    const newButton = screen.getByRole("button", { name: "siguiente quote" });
    expect(newButton.disabled).toBeFalsy();
  });

  test("should call increment function", () => {
    useFetch.mockReturnValue({
      data: [{ author: "test", quote: "hola mundo" }],
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const newButton = screen.getByRole("button", { name: "siguiente quote" });
    fireEvent.click(newButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
