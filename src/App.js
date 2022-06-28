import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoView from './components/TodoListView';

function App() {

  const [todoList, setTodoList] = useState([{}])
  const [title,setTitle] = useState('')
  const [description, setDescription] = useState('')

  //Read all the todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
    .then(res => {
        setTodoList(res.data)
    })
  },[]);

  //Post a todo
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/',{'title':title, 'description':description})
    .then(res => console.log(res))
  };



  return (
    <div className="App">

    <div className='App list-group-item justify-content-center align-item-center mx-auto' style={{"width":"400p","backgroundColor":"white","marginTop":"15px"}}>
    <h1 className='card text-white bg-primary mb-1' styleName="max-width : 20rem;">Task Manager </h1>
    <h6 className='card text-white bg-primary mb-3'>FastAPI - React - MongoDB</h6>
    <div className='card-body'>
    <h5 className='card text-white bg-dark mb-3'>Add your task</h5>
      <span className='card-text'>
        <input className='mb-2 form-control titleIn' onChange={event => setTitle(event.target.value)} placeholder='Title'/>
        <input className='mb-3 form-control descIn' placeholder='Description'/>
        <button className='btn btn-outline-primary mx-2 mb-4' style={{'borderRadius':'50px','font-weight':'bold'}} onClick={addTodoHandler}>Add Task</button>
      </span>
    <h5 className='card text-white bg-dark mb-3'>Todo</h5>
    <div>
      <TodoView todoList = {todoList}/>
    </div>
    </div>


    </div>





    </div>
  );
}

export default App;
