# Angular 1.x Authentication for Front End Masters

## Implementing Authentication Challenges

* Complete the `onLoginSubmit` and `onSignupSubmit` methods to make `POST` requests (sending the user's credentials) to the `api/users/authenticate` and `api/users` endpoints respectively
* Provide a method in `auth.service.js` which saves the returned JWT in local storage
* Create a `logout` method which removes the user's JWT from local storage
* Provide buttons for **Log In** and **Log Out** in the home view and the toolbar

## Running the App

Install the dependencies:

```bash
npm install
```

Run the development version:

```bash
npm run dev
```

The app will be served at `localhost:3002`.
