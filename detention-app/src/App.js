
import './App.css';
import WhiteBoardText from './components/WhiteBoardText';

// FUNCTIONAL COMPONENT
function App() {

  const createBoard = () => {
    let board = [];
    for(let i = 0; i < 100; i++){
      board.push(<WhiteBoardText key={i} />);
    }
    return board;

  }
  return (
    <div className="App">
      {
        createBoard()
      }
    </div>
  );
}

export default App;
