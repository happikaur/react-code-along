# Set up and JSX

This branch is focused on getting the student use to creating, styling, exporting and importing Components.

### Resources

- [Slides](https://opusrs.sharepoint.com/:p:/r/sites/Nologyio/_layouts/15/Doc.aspx?sourcedoc=%7B318F1076-070A-48E0-BCC1-D2E090406885%7D&file=02%20React%20Components.pptx&action=edit&mobileredirect=true)
- [Github plan.md](https://github.com/nology-tech/react-code-along/blob/02-components/notes/plan.md)
- [Component Tree](./component-tree.md)

## Objectives

### Resources

## How to set up a Component - Create a Nav Component

Create a components folder

- How to set up a React Project?
- What is the Project Structure with React?
- What is JSX?
- How do we conditionally show JSX?

---

## How to set up a React Project?

Clone down the repo and install its dependencies.

```bash
git clone https://github.com/nology-tech/react-code-along.git
cd react-code-along
npm install
git checkout 01-setup-and-jsx
```

The naming convention for Components is that the component starts with a capital letter e.g. Nav

We are working with a project created with [create-react-app](https://github.com/facebook/create-react-app). This is a quick way creating a React project. When we use create-react-app to build a project we do have to delete and remove some generated code.

Delete the following:

- public/favicon.ico
- public/logo192.png
- public/logo512.png
- logo.svg
- yarn.lock

Remove the Boilerplate html tags below from public/index.html.

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```

We now need to create the file that our JSX will be written in

You can also update the title and description meta tag.

```html
<title>Ear Worm</title> <meta name="description" content="Web site created to learn react concepts" />
```

Import React into Nav.jsx and create the functional component

```jsx
// Nav.jsx
import React from react

const Nav = () => {

const App = () => {
  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Hello World</h1>
      </header>
    </div>
  );
};

export default App;
```

---

## What is the Project Structure with React?

### Topics

- How do we add a packages?
- What is the public folder?
- What is the src folder?
- How do we add Assets?

Add sass to the project.

```bash
npm install sass ---save-dev
```

Create an assets folder in src.
In the assets make two new folders sass, images.

In the images folder add in the 3 images.

[Images](https://opusrs.sharepoint.com/:f:/s/Nologyio/En2N-F7hDwVJlkshZ_PAAtUBFx-7af4Fttuf3ZpTM-uhhQ?e=nMiUht)

Create a \_variables.scss in the SASS folder. Add in some basic variables

```scss
// _variables.scss
$color-black: #2d3436;
$color-white: #ffffff;
$color-primary: #5dadb0;
$color-secondary: #fdcb6e;
```

Change the App.css to App.scss, delete the boiler plate and add in the code below.

<details>
<summary>Completed App.scss</summary>

```scss
// App.scss
@use "./assets/sass/_variables.scss" as *;

.app {
  .greeting {
    text-align: center;

    &__heading {
      color: $color-black;
    }

    & > * {
      margin: 20px;
    }
  }
}
```

Demo writing JSX in Nav.jsx

```jsx
// Nav.jsx
import React from "react";

const Nav = () => {
  return <p>This is a Nav Component</p>;
};
```

</details>

Export the Nav component and import it into App.jsx.

Render the component in App.jsx and show the component on the webpage.

<details> 
<summary>Completed App.jsx</summary>

```jsx
// App.jsx
import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav";

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
    <>
      <div className="app">
        <Nav />
        <header className="greeting">
          <img src={greetingImg} className="greeting__img" alt={greetingTime} />
          <h1 className="greeting__heading">
            Good {greetingTime} <br /> {user.firstName} {user.lastName}
          </h1>
        </header>
      </div>
    </>
  );
};
```

</details>

<br/>

Write the code for the nav in Nav.jsx
The images for the nav can be found in src/assets/images

```jsx
// Nav.jsx
import React from "react";
import menu from "../../assets/images/menu-icon.png";
import settings from "../../assets/images/settings-icon.png";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={menu} className="nav__item" alt="menu icon" />
      <h2 className="nav__heading">Ear Worm</h2>
      <img src={settings} className="nav__item" alt="settings icon" />
    </nav>
  );
};

export default Nav;
```

Create Nav.scss and style the component using the below styles

<details>
<summary>Completed SCSS styles</summary>

```scss
// Nav.scss
@use "../../assets/sass/_variables.scss" as *;

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: $color-black;

  &__item {
    height: 30px;
  }
}

@media screen and (min-width: 992px) {
  .nav {
    grid-column: 1 / -1;
  }
}
```

</details>

---

## Move onto Challenges

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)
