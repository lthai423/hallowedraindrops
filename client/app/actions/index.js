export const addTodo = (Text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});
