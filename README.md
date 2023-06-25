# StarWarsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.0.

## Development server

Run `npm install` to install the appliation

Run `npm start` to start the appliation

Navigate to `http://localhost:4200/`.
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run cy:open` to execute the end-to-end tests.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Solution 

# Star Wars Characters SPA

This is a coding challenge aimed at creating a modern and functional single page application using the latest version of Angular framework with Sass.

## Overview

The purpose of this application is to list Star Wars characters and their detailed information using the [Star Wars API](https://www.swapi.tech/api/people). The list is paginated with 10 characters per page. Each character name, when clicked, will navigate to the detailed information page of the character.

## Features

- Displays a list of Star Wars characters.
- Pagination for the character list.
- Detailed view of each character.
- Optional navigation to the character's planet information also implemented.
- Each routed view is linked to its previous route and to the character list route preserving the pagination.
- Managed state to avoid unnecessary API calls for previously visited views.
- Standalone components without NgModules.
- Jest framework used for minimal unit test coverage.
- Cypress for minimal e2e tests.
- Responsive and friendly UX/UI.

## Project status

All the tasks mentioned in the challenge were achieved. Managed state management with services. Implemented unit tests with Jest and end-to-end tests with Cypress.

