# earthquake-zen-garden

## Run the app

- Clone the repo
- Run `npm install` // install dependencies
- Run `npm run start` // auto-start the app, open a browser instance and load the app

![earthquake](https://user-images.githubusercontent.com/43288800/161840795-7db59d0f-1ffd-401a-bd0c-c18c299d4752.gif)

## Description

### Set up the project

I didn't use Create React App and created it from scratch.
For this,

- `npm init --yes` for initalizing the project

- Install Webpack for bundling and made `webpack.config.js`

```
npm i webpack webpack-cli -D
npm i webpack-dev-server -D
npm i html-webpack-plugin -D
```

- Setup React

```
npm i react react-dom
```

- Install Babel for transpile JSX code

```
npm i @babel/core @babel/preset-env @babel/preset-react babel-loader -D
```

- I configured the path alias for using the absoulte path such as `components/Home` instead of the relative path such as `../../Home`

- It uses the node version 16 so that I added `.nvmrc`. To use the proper node version,

```
nvm use
```

### Tech Stack

- I used (`Atomic Design Principles`)[https://atomicdesign.bradfrost.com/chapter-2/] for organizing the components

```
components
   |--- pages
   |   |--- DetailView
   |   |--- Home
   |   |--- ProfileView
   |
   |--- template
       |--- Layout
```

- `styled-components` for styling the component and the styles are defined in each component folder

```
Home
  |--- index.js // for component itself
  |--- style.js // for styles
```

- I defined the color variables such as `--ligh-gray` and `--purple`

`--blue` and `--purple` is used for links and `--ligh-gray` is used for the header background color.

- I setup `react-router` for navigating
