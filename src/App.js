import { useState} from "react"
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
// import About from './components/About'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const[tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Attendance Record',
        day: 'Feb 5th at 2.30 PM',
        reminder: true
    },
    {
        id: 2,
        text: 'Daily roles and responsibiilities ',
        day: 'Feb 6th at 1.30 PM',
        reminder: false
    },
    {
        id: 3,
        text: 'Work Progress',
        day: 'Feb 5th at 3.30 PM',
        reminder: true
    },
    {
        id: 4,
        text: 'Future Tasks',
        day: 'Feb 29th at 2.30 PM',
        reminder: false
    },
        
])

// Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}


// Delete Task

const deleteTask = (id ) => {
setTasks(tasks.filter((task) => task.id !== id ))

}


// Toggle Reminder

const toggleReminder = (id ) => {
  setTasks(
    tasks.map(
    (task) => task.id === id ? {...task, reminder :! task.reminder } : task
  )
  )
}

  return (
    <Router>
    <div className="container">
      <Header onAdd = {() => setShowAddTask 
        (!showAddTask) }
        showAdd = {showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} /> : ( 'No Tasks to show' )
      }
      
      {/* <Route path='/about' Component={About} /> */}
      <Footer />
    </div>
    </Router>
  );
}

export default App;
