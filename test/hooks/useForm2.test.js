import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm2 } from "../../src/hooks/useForm2";

describe("test in useForm2", () => {
  const initialForm = {
    name: "carlos",
    email: "carlos@gmail.com",
  };

  test("should return initial values", () => {
    const { result } = renderHook(() => useForm2(initialForm));
    // const { formState } = result.current;
    // console.log(result.current);

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetFomr: expect.any(Function),
    });
  });

  test("should change form name", () => {
    const { result } = renderHook(() => useForm2(initialForm));
    const { onInputChange } = result.current;
    const newValue = "pepe";

    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
    });

    expect(result.current.name).toBe("pepe");
    expect(result.current.formState.name).toBe("pepe");
  });

  test("should reset the form values", () => {
    const { result } = renderHook(() => useForm2(initialForm));
    const { onInputChange, onResetFomr } = result.current;
    const newValue = "pepe";

    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });

      onResetFomr();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
