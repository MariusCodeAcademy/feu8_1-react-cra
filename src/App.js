// import logo from './assets/logo.svg';
import './style/common.css';
import './style/App.css';

// funkcinis komponentas yra funkcija prasideda diziaja raide
// grazina jsx
function MainBtn() {
  const username = 'James';
  // console.log('username ===', username);
  return <button>My name is {username}</button>;
}

function Card1() {
  const cityName = 'New York';
  return (
    <article className='singleCard'>
      <img src='/img/newyork.jpg' alt='new york' className='cardImg' />
      <div className='cardInfo'>
        <h3 className='cardTitle'>New York</h3>
        <p className='cardDate'>Fri 27 Nov 2016</p>
        <p className='text'>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
        </p>
        <button className='btn'>Buy tickets</button>
      </div>
    </article>
  );
}

function App() {
  // const now = new Date();
  // const formatedDate = now.toLocaleString('LT-lt', { dateStyle: 'full' });
  return (
    <div className='App container'>
      <div className='cardsList grid3'>
        <Card1 />
        {/* Card2 */}
        {/* Card3 */}
        {/* single card START */}
        <article className='singleCard'>
          <img src='/img/paris.jpg' alt='new york' className='cardImg' />
          <div className='cardInfo'>
            <h3 className='cardTitle'>Paris</h3>
            <p className='cardDate'>Fri 17 Nov 2017</p>
            <p className='text'>
              Praesent tincidunt sed tellus ut rutrum sed vitae justo.
            </p>
            <button className='btn'>Buy tickets</button>
          </div>
        </article>
        {/* single card END */}
      </div>
    </div>
  );
}

export default App;
