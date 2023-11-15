import { getAllToDos } from "./localStorage";

export const validateTodo = () => {
  const array = getAllToDos();

  const today = new Date();

  const passedTodo = array.filter((todo) => {
    const deadline = new Date(todo.deadline);
    const difference = deadline - today;

    if (difference < 0) {
      return todo;
    }
  });

  const futureTodo = array.filter((todo) => {
    const deadline = new Date(todo.deadline);
    const difference = deadline - today;

    if (difference >= 0) {
      return todo;
    }
  });

  if (passedTodo.length > 0) {
    localStorage.setItem("missing", JSON.stringify(passedTodo));

    localStorage.setItem("pending", JSON.stringify(futureTodo));
  }
};

export const sortData = (array) => {
  const sortedArray = array.sort((a, b) => {
    const today = new Date();
    const diffA = today - new Date(a.deadline);
    const diffB = today - new Date(b.deadline);

    return diffB - diffA;
  });

  return sortedArray;
};
