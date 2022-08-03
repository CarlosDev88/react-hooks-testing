import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/components/07-useReducer/TodoItem";

describe("test in component <TodoItem/>", () => {
  const todo = {
    id: 1,
    description: "Piedra del Alma",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should show pending to do to complet", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");

    console.log(liElement.innerHTML);

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain("align-self-center");
  });

  test("should show the completed component", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");

    console.log(liElement.innerHTML);

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).toContain("text-decoration-line-through");

    expect(spanElement.className).toContain("align-self-center");
  });

  test("span should call ToggleTodo when it press click", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("button should call DeleteTodo when it press click", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
