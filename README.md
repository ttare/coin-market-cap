# ReactJS Test Assignment

### Application description:
This test assignment will have you build an application for following cryptocurrency prices. 
It will contain a list of the top 100 cryptocurrencies. Users will be able to select a fiat currency (USD, EUR, CNY) for the prices. 
When they click on any of the cryptocurrencies in the list, they will see the price, market cap, daily volume and other info. 
You can get all of this from the [public CoinMarketCap API](https://coinmarketcap.com/api/).


### Use
- ReactJS
- MobX or Redux (your choice) for state management
- Git & gitflow

Use tried and tested libraries instead of implementing everything yourself. The goal is to create an app that not only functions well but is also easily maintainable and upgradable.

This app should represent your level of expertise and we trust that you will solve it yourself. You should be able to explain your decisions that you made while planning and developing this app.

Since this app is really simple, do not lose too much time with designs. The look of the app will not have any impact on our assessment of your work.


### Requirements
- Cryptocurrency List
  - The cryptocurrency list should have the top 100 cryptocurrencies
  - The list should have a way to refresh (button)
  - Each item in the list should have the following info:
    - rank
    - symbol
    - price in the selected fiat currency
    - 24 hour change
  - If you click on the item, you are shown the cryptocurrency details
- Cryptocurrency Details
  - This screen should have a bit more info about the selected cryptocurrency:
    - rank
    - name
    - symbol
    - price, 24h volume and market cap in the selected fiat currency
    - price in bitcoin
    - 1h change, 24h change, 7d change
    - total and available supply
  - This screen should have a button to refresh
- Settings
  - This screen is accessible through an icon in the toolbar that is present on all other screens
  - User can select one of the following fiat currencies:
    - USD
    - EUR
    - CNY
  - When the user goes back, if the selected fiat currency was changed, update the results on the previous screen
- Tests
  - Write unit tests (you do not need to test everything, choose a few components and test them)
  
# Running project

## `npm install`

Installs all project dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
