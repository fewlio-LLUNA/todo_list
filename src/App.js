//import logo from './logo.svg';
import { useState } from 'react'; //useStateを扱うためにimportする
import './App.css';


function App() {

  /*todos（Todoリスト）とsetTodos（todosを更新する関数）を定義
    input（入力フィールドの値）とsetInput（inputを更新する関数）を定義 */
  const [todos, setTodos] = useState([]) //todos = []
  const [input, setInput] = useState('') //input - ""
  console.log(todos, setTodos)
  console.log(input, setInput)

  /*todoを追加する関数*/
  const addTodo = (e) => { //(e)を指定することでイベントオブジェクトの指定ができる？
    e.preventDefault()
    if (input.trim()) { // 入力が空でないか確認
    setTodos([...todos, input]); // 新しいTodoを追加
    setInput(''); // 入力フィールドをクリア
    }
  }
  

/*追加されたTodoを表示する関数*/
function DisplayTodo(){ 
  return(
    <li>{todos}</li>
  )
}


  return (//return:画面に返す要素
    <div className="App">
      <h1>Todo-List With React</h1><br></br>

      <form className='add' onSubmit={addTodo}>
      <label>タスクを追加</label>
      <input 
        type='text' 
        name='add' 
        placeholder='やるべきことは何？'
        /*以下2行がよくわからない */
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        />
      </form>
      
      <button onClick={addTodo}>追加</button>

      <ul>
        {todos.map(function(todo, index){
          return<DisplayTodo key={index} todo={todos}/>
        })}
      </ul>
      

    </div>
  );
}

export default App;
