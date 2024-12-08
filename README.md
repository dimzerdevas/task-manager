# Task Manager Application

This project is a Task Manager application built with React, Typescript and Vite.

👉 Deployed with GitHub Actions: https://dimzerdevas.github.io/task-manager/

It includes features such as task creation, editing, deletion, marking a task as done and drag-and-drop functionality. Tasks data is stored and retrieved in local storage. User can filter tasks based on their completion status.

<ins>Note</ins>: There's also a *BORED?* button which makes a request to the API of the (outdated) Chuck Norris jokes, just to showcase some HTTP requests handling with React Query functionality. 

## Technologies used

👉 The application utilizes React Router functionality, the Context API for key features, integrates Material UI components with styled components and notistack for snackbar notifications. It also uses Auth0 for authentication.

👉 Jest is used for unit testing, miragejs for mocking the API requests and react-testing-library for rendering components in the test environment.

👉 Prettier and eslint are used for code format.

## Architectural Decisions

The application is split in views per route/page. Common components, hooks and layouts are in the src root of the app.

## Setup and Run the Project Locally

- Clone the repo `git clone https://github.com/dimzerdevas/task-manager`
- Change directory to project's root `cd task-manager`
- Install dependencies `npm install`
- Run the application `npm run dev`

<ins>Important note</ins>:

- To access the main application you will need to login.
- In order for `auth0` provider to work, you will need to create an `.env` following the format of `.env.sample`(read more: https://auth0.com/docs/quickstart/spa/react/interactive)
- In case you don't want to all that, you can always comment out the `AuthProvider` and/or the `isAuthenticated` variable. 

## Considerations

- React Beautiful DnD is deprecated and should be viewed as a tech debt. A small animation flickering may also have to do with that.
- There are some `TODOs` in the code as notes, mostly on some typescript issues I encountered and some tests that weren't clearing up properly.
