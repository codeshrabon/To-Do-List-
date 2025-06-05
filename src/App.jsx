import { useState } from "react"
import "./style.css"




export default function App(){
const [newItem, setNewItem] = useState("")
// newItem = "dfd-efd"
// setNewItem("ref-sft")
const [todos, setTodos] = useState([])

function handleSubmit(e) {
  e.preventDefault()

  setTodos(currentTodos => {
    return [
      ...currentTodos, {id: crypto.randomUUID(), title: newItem, completed:false},    
    ]
  })

  //setTodos(...todos, {id: crypto.randomUUID(), title: newItem, completed:false},)
}



console.log(todos)

return <>
    <form onSubmit={handleSubmit} className = "new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
    </div>
    <button className="btn">Add</button>
</form>
<h1 className="header">Toto List</h1>
<ul className="list">
  <li>
    <label>
      <input type="checkbox" />
      Item 1
    </label>
    <button className="btn btn-danger">Delete</button>
  </li>

  <li>
    <label>
      <input type="checkbox" />
      Item 1
    </label>
    <button className="btn btn-danger">Delete</button>
  </li>
</ul>
  </>
}
