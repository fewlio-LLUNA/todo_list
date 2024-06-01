import { useEffect, useState } from "react"; //useStateを扱うためにimportする
import "./App.css";

function App() {
  /*todos（Todoリスト）とsetTodos（todosを更新する関数）を定義
    input（入力フィールドの値）とsetInput（inputを更新する関数）を定義 */
  const [todos, setTodos] = useState([]); //todos = []
  const [input, setInput] = useState(""); //input - ""

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

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  /*追加されたTodoを表示する関数*/
  function DisplayTodo(props) {
    return (
      <li>
        <p>タスク名：{props.todo}</p>
        <button>完了</button>
      </li>
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
            /*以下2行がよくわからない */
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button type="submit">追加</button>
      </form>

      <ul className="list">
        {todos.map(function (todo, index) {
          return <DisplayTodo key={index} todo={todo} />;
        })}
      </ul>
    </div>
  );
}

export default App;
