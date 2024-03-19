import './App.css';
import './componets/Appname';
import Appname from './componets/Appname';
import { Button } from 'react-bootstrap';

function App()
{
  return (
    <div className="App">
      <Appname/>
      <button>Normal</button>
      <Button>Bootstrap</Button>
    </div>
  );
}

export default App;