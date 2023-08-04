// import logo from './assets/logo.svg';
import './style/common.css';
import './style/App.css';
import MainBtn from './components/MainBtn';
import Card1 from './components/Card1';

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
