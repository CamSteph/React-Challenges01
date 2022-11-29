import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import UndoRedo from './Challenges/UndoRedo';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHover from './Challenges/CardHover';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/undo-redo' element={<UndoRedo />} />
        <Route path='/card-hover' element={<CardHover />} />
      </Routes>
    </div>
  )
}

export default App
