import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import ChangeTodo from "./ChangeTodo";
import { TodoType } from "@/types/todoTypes";

const Todo = ({ todo }: { todo: TodoType, idx: number }) => {
  const todoStyle = {
    textDecoration:
      todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div
      className='  flex items-center justify-between bg-white py-3 px-8 rounded-2xl text-black'
      style={todoStyle}
    >
      <div className="flex gap-2 items-center">
        <ChangeTodo todo={todo} />
        <span className='text-center font-bold uppercase'>{todo.title}</span>
      </div>
      <div className='flex items-center gap-5'>
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
