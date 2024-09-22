# Item List with Search - React Application

This React application allows users to display a list of items and filter them in real-time through a search bar. The app is optimized to minimize re-renders using React best practices, including hooks, memoization, and Redux Toolkit for state management.

## Features

- Display a list of items.
- Real-time filtering based on user input in the search bar.
- Optimized to prevent unnecessary re-renders using `React.memo`.
- State management handled by Redux Toolkit.
- Unit tests for the Redux slice and components using Jest and React Testing Library.
- Github Actions for automatically tesing the react-app and check if the build succeed when code is pushed on the main branch (CI Pipeline)

## Technologies Used

- React
- Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- React Hooks (`useSelector`, `useDispatch`, `React.memo`)
- React Testing Library & Jest for unit testing
- Github Actions

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

You will need to have the following installed:

- Node.js (version 14 or above)
- npm (Node package manager)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Prithviraj2003/assignment-item-list.git
   ```
2. Navigate to the project directory:
   ```bash
    cd assignment-item-list
   ```
3. Install the dependencies:
   ```bash
    npm install
   ```
### Running the Application 

To start the development server, run the following command:
  ```bash
     npm start
  ```
This will start the application at http://localhost:3000.

### Running Tests

Unit tests have been written for the Redux slice and components. To run the tests, use the following command:

  ```bash
    npm test
  ```
This will run the tests using Jest and React Testing Library.





