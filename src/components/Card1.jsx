import MainBtn from './MainBtn';

function Card1() {
  const cityName = 'New York!!!';
  return (
    <div>
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
    </div>
  );
}

export default Card1;
