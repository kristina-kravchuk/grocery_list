import image from './shopping.jpg'
import imageTwo from './man.jpg'
import './App.css';
import { Grocery } from './Grocery';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <img src={image} width="250px" alt="shopping"/>
      </div>
      <div className='container'>
      <h1 >Grocery list</h1>
      </div>
      <Grocery/>
      <div className='container'>
      <img src={imageTwo} width="250px" alt="man"/>
      </div>
    </div>
  );
}

export default App;
