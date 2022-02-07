import moon from '../../assets/images/moon.png';
import sun from '../../assets/images/sun.png';
import sunrise from '../../assets/images/sunrise.png';



const Header = () => {
  const getCurrentHour = () => {
    return new Date().getHours();
  }
  
  const userName = {
    firstName: 'Harpreet',
    lastName: 'Kaur',
  }
  
  let message = '';
  let image;
  
  const currentHour = getCurrentHour();
  if (currentHour > 12) {
    image = sun;
    message = 'Good Afternoon!';
  } else if (currentHour > 18) {
    image = moon;
    message = 'Good Evening!';
  } else {
    image = sunrise;
    message = 'Good Morning!';
  }

  return (
    <header className='greeting'>
      <h1 className='greeting__heading'>Current Time</h1>
      <img src={image} alt="Current time" className='greeting_image' />
      <p className='size'>{message}</p>
      <p className='font'>{userName.firstName} {userName.lastName}</p>
      {/* <p>{500 * 50}</p> */}
    </header>
  )
}

export default Header