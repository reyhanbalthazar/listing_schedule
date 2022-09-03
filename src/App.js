import ScheduleList from './components/ScheduleList';
import AddSchedule from './components/AddSchedule';
import NavBar from './components/NavBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ScheduleList />} />
        <Route path='/addschedule' element={<AddSchedule />} />
      </Routes>
    </div>
  );
}

export default App;
