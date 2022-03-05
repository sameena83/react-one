
import './App.css';
import  Menu from './components/Menu'
import  ToDo from './components/ToDo'

function App() {
  return (
    <div className="container">
      <div class="menu">
      <Menu item="chicken" />
      <Menu item="mutton" />
      <Menu item="egg" />
      <Menu item="vegan" />
      </div>
      <div class="todo">
      <ToDo item="dishes" />
      <ToDo item="wash" />
      <ToDo item="groceries" />
      <ToDo item="study" />
      </div>
     
    </div>
  );
}

export default App;
