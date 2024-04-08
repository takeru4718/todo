"use client"
import {useState} from "react";

export default function Home() {
  const [text,setText] = useState<string>('')
  const [todos, setTodos] = useState<string[]>([]);

  const changeText = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value);
    console.log(text)
  };

  const addTodos = () => {
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  }

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <main>
        <div>
          <input type="text" value={text} onChange={changeText}/>
          <button onClick={addTodos} className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">追加</button>
        </div>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <ul>
            {todos.map((todo, index)=>(
              <li key={todo} className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
                <p className="text-gray-800">{todo}</p>
                <button onClick={() => deleteTodo(index)} className="px-4 py-0.1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">完了</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
