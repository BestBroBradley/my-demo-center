import '../styles/App.css';
import NewScheduler from '../components/NewScheduler'

function Scheduler() {
  return (
    <div className="Scheduler">
      <h1>This is the scheduler page.</h1>
      < NewScheduler />
    </div>
  );
}

export default Scheduler;