import React from "react";
import { useForm2 } from "../../hooks/useForm2";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetFomr } = useForm2({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNewTodo && onNewTodo(newTodo);
    onResetFomr();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name="description" //==> deve ser igual al value
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
