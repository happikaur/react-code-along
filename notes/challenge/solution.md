# Solution: Set up and JSX

**Resist the urge the to look in these files if you can't come up with a solution yourself.**

It's always better to google, ask a fellow student or ask a coach. This is one way of solving the challenge not the only way to do it.

## Adding JS into JSX

1. In App.jsx, inside the App function create a user object.

```jsx
// Inside the App function above the return statement
const user = {
  firstName: "John",
  lastName: "Doe",
};
```

2. In App.jsx use the values from the user object in your jsx.

```jsx
// Part of the return statement from the App function
<h1>
  Good day! {user.firstName} {user.lastName}
</h1>
```

## Conditionally Render content

1. In App.jsx based on the time variable alter the message to correctly greet the user.

```jsx
// Inside the App function

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
  <header>
    <img src={greetingImg} />
    <h1>
      Good {greetingTime} {user.firstName} {user.lastName}
    </h1>
  </header>
);
```

## Completed Component

```jsx
import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";

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
    <header>
      <img src={greetingImg} />
      <h1>
        Good {greetingTime} {user.firstName} {user.lastName}
      </h1>
    </header>
  );
};

export default App;
```