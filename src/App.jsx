import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';

const App = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let greetingTime = "Morning!";

  if (currentHour >= 12) {
    greetingImg = sun;
    greetingTime = "Afternoon!";
  }

  if (currentHour >= 18) {
    greetingImg = moon;
    greetingTime = "Evening!";
  }

  return (
    <div className="app">
      <Nav />
      <Header className="greeting">
        <img src={greetingImg} alt={greetingTime} className="greeting__img" />
        <h1 className="greeting__heading">
          Good {greetingTime} <br /> {user.firstName} {user.lastName}
        </h1>
      </Header>
    </div>
  );
};

export default App;
