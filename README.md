# Login page (partial)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Implementation notes
- I have not cleaned up the login page to production state by far, due to time constraints.
However, it should be understandable how I would progress to finish it. For that purpose I also diverted from the UI required.
- The code would need cleanup, the LoginForm is very long and in production I would split it into components
- In low resolution screens it would make sense to make the sign in button full width and put it below the forgot password
- Login action calls delay and randomly select success or failure (see /src/containers/LoginPage/saga.ts). Failure would just put error on password field,
success is ignored.
- I did not provide aria https://www.w3.org/TR/using-aria/
- For production tests would be required

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn typecheck`

Runs typecheck

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
