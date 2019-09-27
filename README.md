# Knight's Journey!

Find your Knight's Journey two moves ahead.

<img src="https://i.ibb.co/YpwPxVw/screenshot.png"
     alt="Screenshot icon"
     style="float: left; margin-right: 10px;" />

## Setup

To run this project, install it locally using npm:

```
$ cd into folder
$ npm install
$ npm start, which will start hot reloading and nodemon, and fire up browser with http://localhost:3000/
```

## Folder Structure:

I placed all my components inside the components folder, creating separate folders for each component. Each respective folder has all the HTML, CSS, and JS is self contained.
In order to further avoid global namespace collision, I used CSS modules. Shared fonts, and CSS are placed in the assets folder. I included a CSS reset for cross-browser consistency.

## Contributions:

I added a contributing.md that outlines the steps a potential contributor should take to install the project and make pull requests.
To assist with code maintainability, I added eslint and prettier to the project.

## Algorithm for Knight:

- Time Complexity On^2
- On^2 remains usable up to about n = 10000, but quickly deteriorates with larger inputs. I decided since the input data was fairly small I would trade off time complexity for readability of the function.

- Knight Position Details:
  The knightPositions function takes in the current position as algebraic notation received from the client. The function turns the algebraic notation into numbers to then run it through a variety of if statements checking the 8 possible ways the piece could move.

- The knightPositions function returns a set with all possible moves from the users first turn. The set of first possible moves is then iterated through calling the knightPositions function on every position in the array in the secondTurn function.
- The secondTurn function returns an array of all possible moves for 2 moves ahead.
- Set was used to filter duplicates in the array.
- The array of available positions is then sent back to the client with a response.

## Unit Tests

API Testing

1. Supertest for the API. Making sure API is issuing the call/post request and there is a response from the server.

UI Testing

1. When the square is clicked, corresponding square receives a knight piece.
2. Possible moves are highlighted
