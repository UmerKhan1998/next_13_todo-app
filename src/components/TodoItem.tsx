"use client";
import { AiOutlineDelete } from "react-icons/ai";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

const TodoItem = ({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) => {
  return (
    <div className="flex align-middle justify-between mb-4">
      <li className="flex items-center gap-1">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </li>
      <button
        className="border border-slate-300 text-slate-300 px-2 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        onClick={() => deleteTodo(id)}
      >
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default TodoItem;
