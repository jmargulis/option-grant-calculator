# Option Grant Calculator

## Goal

> Build a simple, non-authenticated, single-page option grant calculator app, using whatever tech stack you like:
> 
> It should ask for the number of shares in the grant, the total number of shares outstanding and the strike price / exercise price of the options
> (e.g. 10,000 share options in the grant, out of 8,000,000 outstanding at exercise cost of $0.001)
> 
> It should then allow the user to enter an exit date and exit valuation and calculate the user’s take-home based on their percentage ownership, the cost of the shares & what the annualized “return” in cash has been for each year of service
> (say, the exit is 4 years in future for net $100k to the person, then their annualized comp increase is $25k)
> (For the purpose of this exercise I have specifically ignored future dilution and liquidity preferences and all the other things that make this complicated: we want to see what you can build, not how well you understand financing!)
> 
> **bonus**: support multiple stock option grants for the same company and make them persistent, so that a user coming back to the page later on the same machine would be able to add new grants they get without reentering the old ones.
> 
> **hint**: Beth from our team wrote a post on [how to ace a take-home exercise](https://blog.ltse.com/six-tips-to-ace-a-coding-exercise-e0a8d67d96c9)

## Approach

This project bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and has a few states to accomplish the goals.

We are storing an array of option grants which include the number of shares granted, total number of shares, strike price per share, and strike date. These values are used to calculate the value at exit.
 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
The tests run using [Jest](https://www.npmjs.com/package/jest) (included; general JS testing) and [Enzyme](https://www.npmjs.com/package/enzyme) (React version specific mounting and DOM traversal).
We currently use `.spec.js` files next to the JavaScript file we want to test as this is a small project. We would eventually move all tests to a tests folder when it becomes unwieldy.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Builds and deploys the app to [surge.sh](https://surge.sh/).<br>
Specifically, the to [http://option-grant-calculator.surge.sh/](http://option-grant-calculator.surge.sh/) for testing without a local development environment.
