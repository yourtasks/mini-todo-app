export const getAllToDos = () => {
  const allTodos = localStorage.getItem("todos");

  if (allTodos) {
    return JSON.parse(allTodos);
  } else {
    return [];
  }
};

export const createToDo = (data) => {
  const all = getAllToDos();

  if (all.length > 0) {
    all.push(data);

    localStorage.setItem("todos", JSON.stringify(all));
  } else {
    const newData = [data];

    localStorage.setItem("todos", JSON.stringify(newData));
  }
};
