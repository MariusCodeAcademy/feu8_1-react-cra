// import logo from './assets/logo.svg';
import './style/common.css';
import './style/App.css';

// funkcinis komponentas yra funkcija prasideda diziaja raide
// grazina jsx
function MainBtn() {
  return <button className='btn'>Buy tickets</button>;
}

function Card1() {
  const cityName = 'New York!!!';
  return (
    <article className='singleCard'>
      <img src='/img/newyork.jpg' alt='new york' className='cardImg' />
      <div className='cardInfo'>
        <h3 className='cardTitle'>{cityName}</h3>
        <p className='cardDate'>Fri 27 Nov 2016</p>
        <p className='text'>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
        </p>
        <MainBtn />
      </div>
    </article>
  );
}

function Card2() {
  const cityName = 'Paris !!!';
  return (
    <article className='singleCard'>
      <img src='/img/paris.jpg' alt='new york' className='cardImg' />
      <div className='cardInfo'>
        <h3 className='cardTitle'>{cityName}</h3>
        <p className='cardDate'>Fri 17 Nov 2017</p>
        <p className='text'>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
        </p>
        <MainBtn />
      </div>
    </article>
  );
}

function Card3() {
  const cityName = 'San Francisco !!!';
  return (
    <article className='singleCard'>
      <img src='/img/sanfran.jpg' alt='new york' className='cardImg' />
      <div className='cardInfo'>
        <h3 className='cardTitle'>{cityName}</h3>
        <p className='cardDate'>Fri 17 Nov 2017</p>
        <p className='text'>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
        </p>
        <MainBtn />
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
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

export default App;
