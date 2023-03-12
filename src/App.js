import { useState } from "react";
import { TodoList } from "./components/TodoList";

const  App = () => {
const [list, setList] = useState([
  {id:1, task:'Убраться'},
  {id:2, task:'Помыть посуду'},
  {id:3, task:'Сходить в магазин'},
  {id:4, task:'Помочь'},
])

  return (
    <div className="App">
      <TodoList list={list} setList={setList}/>
    </div>
  );
}

export default App;
