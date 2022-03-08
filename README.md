# FOR DEVELOPERS: 
  Before you begin on front-end, you must ensure you have Node.js installed. You can install it <a href='https://nodejs.org/en/'> from here </a>. 
  
  Then, clone the repository in your desired path. After you clone it, you must install this project's dependencies. 
  You can do that by typing ``` npm install ``` inside the repository you just installed. 
  After you installed ran the above command, a node_modules folder should appear with all required dependencies.
  
  To launch the website on your local host, run the command ```npm start```. A page should launch in you browser.
  ---------
  To begin with backend, first install django using ```pip install django```. 
  Next install dependencies using ```pip install -r requirments.txt``` 
  To serve the front end using django, first run the build of the front end 
      - This could be done by executing the custome script in bash terminal. run ``` npm run relocate```. 
      the above will bundles everything the front-end needs as static files under folder 'build'. It will 
      also move the build folder to the backend. 
  Now that you have the 'build' folder under serverside folder, collect the static using ```python manage.py collectstatic``` 
  Finally run the server using ```python manage.py runserver --nostatic``` 
      - this will run the server on your localhost:8000, and serve static files with whitenoise instead of django's default

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Front End v0.3
  - Use React JS 
  - For local development, no need for user auth 
  - Must display some data (for v0.3, it could be input from another window) 
  - Minimum animation 
  - Push requests to the backend 

# Back-end v0.3 
  - Use Django
  - Pull requests from the front-end 
  - Store data from fakeMCU into MySQL DB 
  - When data is requested from front-end, send data 
# fakeMCU 
  - Simple HTML/CSS
  - Window to simulate an MCU 
  - Only has a text field and submit button 
  - Submits to back-end
