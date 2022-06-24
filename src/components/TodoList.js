import React from 'react';
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';

export default function TodoList({ todoList }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo key={todo.id} todo={todo} />
        ) : (
          <TodoItem key={todo.id} todo={todo} />
        )
      )}
    </ul>
  ) : (
    <p>Aucune tâche en cours </p>
  );
}
