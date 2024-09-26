export default function () {
  const tasksList = useState("tasks", () => []);
  const addTodo = (payload) => {
    tasksList.value = [...tasksList.value, payload];
    console.log(tasksList.value, payload);
  };
  return {
    tasksList,
    addTodo,
  };
}
