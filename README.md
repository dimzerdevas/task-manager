# Task Manager Application 

This project is a Task Manager application built with React, Typescript and Vite. 
👉 Deployed with GitHub Actions: https://dimzerdevas.github.io/task-manager/

It includes features such as task creation, editing, deletion, marking a task as done and drag-and-drop functionality. Tasks data is stored and retrieved in local storage. User can filter tasks based on their completion status.

## Technologies used

The application utilizes React Router functionality, the Context API for key features, integrates Material UI components with styled components and notistack for snackbar notifications. It also uses Auth0 for authentication.

Jest is used for unit testing, miragejs for mocking the API requests and react-testing-library for rendering components in the test environment. 

Prettier and eslint are used for code format.

## Architectural Decisions

The application is split in views per route/page. Common components, hooks and layouts are in the src root of the app.

## Setup and Run the Project Locally 

- Clone the repo `git clone https://github.com/dimzerdevas/task-manager`
- Change directory to project's root `cd task-manager`
- Install dependencies `npm install`
- Run the application `npm run dev`

Important note: 
- To access the main application you will need to login. 
- In order for `auth0` provider to work, you will need to create an `.env` following the format of `.env.sample`(read more: https://auth0.com/docs/quickstart/spa/react/interactive) 

## Considerations 
- React Beautiful DnD is deprecated and should be viewed as a tech debt.
