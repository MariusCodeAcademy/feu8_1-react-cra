import logo from './assets/logo.svg';
import './style/common.css';
import './style/App.css';

// funkcinis komponentas yra funkcija prasideda diziaja raide
// grazina jsx
function MainBtn() {
  const username = 'James';
  // console.log('username ===', username);
  return <button>My name is {username}</button>;
}

function App() {
  const now = new Date();
  const formatedDate = now.toLocaleString('LT-lt', { dateStyle: 'full' });
  return (
    <div className='App container'>
      <img height='100' src={logo} alt='logotipas' />
      <h1>Hello react !!!</h1>
      <h2>Today is {formatedDate}</h2>
      <MainBtn />
      <img src='/img/diver.jpg' alt='logo' />
    </div>
  );
}

export default App;
