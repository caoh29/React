import './App.css';

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

const changeTheme = () => {
  const body = document.querySelector('body');
  const allLiElements = document.querySelectorAll('li');
  const isDarkMode = body.classList.contains('dark');

  if (isDarkMode) {
    body.classList.remove('dark');
    allLiElements.forEach(li => li.style.color = 'black');
  } else {
    body.classList.add('dark');
    allLiElements.forEach(li => li.style.color = '#66bb6a');
  }
};

function App() {
  return (
    <div className="App">
      <label className="switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onClick={() => changeTheme()}/>
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
