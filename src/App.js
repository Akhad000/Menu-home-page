
import './App.css';
// import Counter from './Components/Counter';
import{Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import { Taomlar } from './Components/Taomlar';
function App() {
  return (
    <>
     
      <Taomlar/>
      <Home/>
      {/* <Home2 /> */}
      {/* <Counter/> */}
      

      </>
    
  );
}

export default App;
