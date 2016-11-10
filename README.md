# Angular 1.x Authentication for Front End Masters

## Protecting Routes Challanges

* Add `data { requiresLogin: true }` to the `/profile`, `/instructor` and `/instructor/new` routes
* Add a method called `isAdmin` to `auth.service.js` and conditionally show and hide the **Add Instructor** button in the `/instructor` view based on whether the user is authenticated and is an admin

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
