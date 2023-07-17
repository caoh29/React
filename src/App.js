import './App.css';
import './slider.css';

const PLANETS = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune'
];

function App() {
  return (
    <div className="App">
      <label className="switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
      </label>
      <h1 style={{ color: '#999', fontSize: '19px' }}>Solar system planets:</h1>
      <ul className='planets-list'>
        {
          PLANETS.map((planet, index) => <li key={index}>{planet}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
