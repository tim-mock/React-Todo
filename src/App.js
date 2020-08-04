import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const initialTodo = 
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state= {
      todoTasks: initialTodo
    }
  }

toggleTasks = (id) => {
  this.setState({
    todoTasks: this.state.todoTasks.map(item =>{
      if (item.id === id) {
        return {
          ...item, 
          completed: !item.completed
      }
      }
      else {
        return item; 
      }
    }
      )
  })
}

deleteCompleted = (id) => {
  this.setState({
    todoTasks: this.state.todoTasks.filter((item) => {
return(
  item.completed === false
)
    })
  })
  }



  addTask = (newTodo) => {
const newItem = {
  task: newTodo,
  id: Date.now(),
  completed: false
}
console.log(newItem)
this.setState({
  todoTasks: [...this.state.todoTasks, newItem]
})
console.log(this.state.todoTasks)
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addTask} />
        <TodoList tasks={this.state.todoTasks}
        toggleTasks={this.toggleTasks} 
        deleteCompleted={this.deleteCompleted}
        /> 
        {console.log('yo', this.state.todoTasks)}
      </div>
    );
  }
}

export default App;
