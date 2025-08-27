
/* eslint-env jest */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

// rest of your test code...
describe('TodoList Component', () => {
  test('renders TodoList component correctly', () => {
    render(<TodoList />);
    
    // Check if the title is rendered
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if the input field is rendered
    expect(screen.getByPlaceholderText('Enter a new todo')).toBeInTheDocument();
    
    // Check if the Add Todo button is rendered
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('renders initial demo todos', () => {
    render(<TodoList />);
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Build todo app')).toBeInTheDocument();
    
    // Check that we have 3 todo items initially
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Enter a new todo');
    const addButton = screen.getByText('Add Todo');
    
    // Type a new todo
    fireEvent.change(input, { target: { value: 'New test todo' } });
    
    // Submit the form
    fireEvent.click(addButton);
    
    // Check if the new todo is added
    expect(screen.getByText('New test todo')).toBeInTheDocument();
    
    // Check that input is cleared after adding
    expect(input).toHaveValue('');
    
    // Check that we now have 4 todo items
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(4);
  });

  test('adds todo by pressing Enter key', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Enter a new todo');
    
    // Type a new todo
    fireEvent.change(input, { target: { value: 'Enter key todo' } });
    
    // Press Enter key
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    // Check if the new todo is added
    expect(screen.getByText('Enter key todo')).toBeInTheDocument();
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Enter a new todo');
    const addButton = screen.getByText('Add Todo');
    
    // Try to add empty todo
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(addButton);
    
    // Should still have only 3 initial todos
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);
  });

  test('does not add whitespace-only todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Enter a new todo');
    const addButton = screen.getByText('Add Todo');
    
    // Try to add whitespace-only todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Should still have only 3 initial todos
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    
    const learnReactTodo = screen.getByText('Learn React');
    const writeTestsTodo = screen.getByText('Write tests');
    
    // Initially, "Learn React" should not be completed
    expect(learnReactTodo.closest('li')).not.toHaveClass('completed');
    
    // Initially, "Write tests" should be completed
    expect(writeTestsTodo.closest('li')).toHaveClass('completed');
    
    // Click on "Learn React" to toggle it to completed
    fireEvent.click(learnReactTodo);
    expect(learnReactTodo.closest('li')).toHaveClass('completed');
    
    // Click on "Write tests" to toggle it to not completed
    fireEvent.click(writeTestsTodo);
    expect(writeTestsTodo.closest('li')).not.toHaveClass('completed');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    
    // Find the delete button for "Learn React"
    const learnReactTodo = screen.getByText('Learn React');
    const deleteButton = learnReactTodo.closest('li').querySelector('.delete-btn');
    
    // Click delete button
    fireEvent.click(deleteButton);
    
    // Check that "Learn React" is no longer in the document
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    
    // Check that we now have 2 todo items
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(2);
  });

  test('shows empty message when all todos are deleted', () => {
    render(<TodoList />);
    
    // Delete all todos
    const deleteButtons = screen.getAllByText('Delete');
    deleteButtons.forEach(button => {
      fireEvent.click(button);
    });
    
    // Check that empty message is shown
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
    
    // Check that no list items are present
    const todoItems = screen.queryAllByRole('listitem');
    expect(todoItems).toHaveLength(0);
  });

  test('delete button has correct aria-label', () => {
    render(<TodoList />);
    
    // Check that delete button has proper aria-label
    const deleteButton = screen.getByLabelText('Delete Learn React');
    expect(deleteButton).toBeInTheDocument();
  });

  test('completed todos have proper styling', () => {
    render(<TodoList />);
    
    const writeTestsTodo = screen.getByText('Write tests');
    const todoItem = writeTestsTodo.closest('li');
    
    // Check that completed todo has the 'completed' class
    expect(todoItem).toHaveClass('completed');
  });

  test('todo text has pointer cursor style', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    
    // Check that todo text has cursor pointer style
    expect(todoText).toHaveStyle({ cursor: 'pointer' });
  });
});