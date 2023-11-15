import { v4 } from "uuid";

export const getMissing = () => {
  const allTodos = localStorage.getItem("missing");

  if (allTodos) {
    return JSON.parse(allTodos);
  } else {
    return [];
  }
};

export const getAllToDos = () => {
  const allTodos = localStorage.getItem("pending");

  if (allTodos) {
    return JSON.parse(allTodos);
  } else {
    return [];
  }
};

export const createToDo = (data) => {
  const { todo, createdAt, deadline } = data;
  const all = getAllToDos();

  if (all.length > 0) {
    all.push({ todo, createdAt, deadline, id: v4() });

    localStorage.setItem("pending", JSON.stringify(all));
  } else {
    localStorage.setItem(
      "pending",
      JSON.stringify([{ todo, createdAt, deadline, id: v4() }])
    );
  }
};
