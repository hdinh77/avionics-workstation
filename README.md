# Avionic Workstation Software System

## To start the development app
 ```$ cd avionics-workstation
    $ cd app
    $ npm run dev
```

## Dependencies
 - react
 - react-dom
 - react-router-dom
 - electron
 - electron-builder (packages and builds electron)
 - electron-is-dev (debugging)
 - wait-on (so webpack server runs before electron)
 - concurrently
 - express
 - socket.io

 ## Setting up React with Electron
 - install the React dependencies ```npm i react```
 - create the react app by running ```npx create-react-app app```
 - then, change directory into ```app``` and install the Electron, wait-on, and concurrently dependencies
 - to create routers to different pages, use the BrowserRouter libraries from ```react-router-dom```
 - in the index.js file where we are rendering the React DOM, wrap the contents in <React.StrictMode> in a ```<BrowserRouter></BrowserRouter>``` tag
 - this lets you use URLs to route to different components, using ```<Link>``` as well
 - then, create an 'electron' directory and a main.js file inside
 - in the main.js, we can create the browser window and port to localhost in development mode
 - next, add scripts in the package.json:
    - "dev": "concurrently \"npm start\" \"wait-on http://localhost:3000 && electron .\""
        - this starts the react app, and waits for this app to render in localhost before running electron to make sure electron renders the app correctly at the same time
    - "ebuild": "npm run build && node_modules/.bin/build"
        - builds the electron app in the right path
- add a .env file to pass environment variables, containing one line: ```BROWSER=none```

 