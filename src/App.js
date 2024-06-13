import { useEffect, useState } from "react"; //useStateを扱うためにimportする
import "./App.css";

function App() {
  /*todos（Todoリスト）とsetTodos（todosを更新する関数）を定義
    input（入力フィールドの値）とsetInput（inputを更新する関数）を定義 */
    const [todos, setTodos] = useState(() => {
      const savedTodos = localStorage.getItem("todos");// LocalStorageから保存されているtodosを取得      
      if (savedTodos) {                                // 保存されているデータがあるかどうかを確認
        return JSON.parse(savedTodos);                 // データがある場合はJSON配列→JSの配列に変換
      } else {
        return [];
      }
    });
    
  const [input, setInput] = useState(""); //input ＝ ""

  /*todoを追加する関数*/
  const addTodo = (e) => {
    //(e)を指定することでイベントオブジェクトの指定ができる？
    e.preventDefault();
    if (input.trim()) {
      // 入力が空でないか確認
      setTodos([...todos, input]); // 新しいTodoを追加
      setInput(""); // 入力フィールドをクリア
    }
  };

  /*todoを削除する関数 */
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  /* 依存配列[todos]が変更されるたびに発火する */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));// データがある場合はJSの配列→JSON配列に変換
  }, [todos]);
  
  /*追加されたTodoを表示する関数*/
  function DisplayTodo({ todo, index, removeTodo }) {
    return (
      <div className="DisplayTodo">
      <li>
        <p>・{todo}</p>
        <button onClick={() => removeTodo(index)}>完了</button>
      </li>
      </div>
    );
  }

  return (
    //return:画面に返す要素
    <div className="App">
      <h1>Todo-List With React</h1>

      <form className="addForm" onSubmit={addTodo}>
        <div>
          <label htmlFor="taskName">タスクを追加</label>
          <input
            type="text"
            id="taskName"
            placeholder="やるべきことは何？"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button type="submit">追加</button>
      </form>

      <ul className="list">
        {todos.map(function (todo, index) {
          return <DisplayTodo key={index} todo={todo} index={index} removeTodo={removeTodo}/>;
        })}
      </ul>
    </div>
  );
}

export default App;
