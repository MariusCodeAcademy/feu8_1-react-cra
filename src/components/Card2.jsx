import MainBtn from './MainBtn';

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

export default Card2;
