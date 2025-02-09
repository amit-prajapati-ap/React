import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-4 bg-[#172842] py-2 rounded-sm">
      <div className="w-full max-w-2xl mx-auto rounded-lg px-4 py-3 text-white">
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {todos.map((todo) => (
            <div key={todo.id} className="w-full flex justify-between">
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))}className="text-red-500 cursor-pointer">X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
