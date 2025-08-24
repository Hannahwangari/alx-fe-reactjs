/* eslint-env jest */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";

describe("Todo App", () => {
  let todos;
  let addTodo;
  let toggleTodo;
  let deleteTodo;

  beforeEach(() => {
    todos = [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Write Tests", completed: true },
    ];
    addTodo = jest.fn((text) => todos.push({ id: 3, text, completed: false }));
    toggleTodo = jest.fn((id) => {
      const todo = todos.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
    });
    deleteTodo = jest.fn((id) => {
      todos = todos.filter((t) => t.id !== id);
    });
  });

  test("renders initial todos", () => {
    render(<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("calls toggleTodo when a todo is clicked", () => {
    render(<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />);
    fireEvent.click(screen.getByText("Learn React"));
    expect(toggleTodo).toHaveBeenCalledWith(1);
  });

  test("calls deleteTodo when delete button is clicked", () => {
    render(<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />);
    fireEvent.click(screen.getAllByText("Delete")[0]);
    expect(deleteTodo).toHaveBeenCalledWith(1);
  });

  test("AddTodoForm calls addTodo on submit", () => {
    render(<AddTodoForm addTodo={addTodo} />);
    fireEvent.change(screen.getByPlaceholderText("Add a new todo"), { target: { value: "New Todo" } });
    fireEvent.click(screen.getByText("Add"));
    expect(addTodo).toHaveBeenCalledWith("New Todo");
  });
});
