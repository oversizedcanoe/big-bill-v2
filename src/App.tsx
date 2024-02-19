import './App.css';
import { GameBoard } from 'components/game-board/game-board';

function App() {
  return (
    <div className="App container-fluid" style={{backgroundColor: 'green', height: '100vh', width: '100vw'}}>
      <GameBoard />
    </div>
  );
}

export default App;
