import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const yearsAsteroidsFound = data.asteroids.map((asteroid) => asteroid.discoveryYear).reduce((allDates, date) => {
    const currcount = allDates[date] ?? 0
    let countedYears = {
      ...allDates,
      [date]: currcount + 1
    }
    return countedYears
  })
  const yearMostAsteroidsFound = Object.keys(yearsAsteroidsFound)
  .reduce((acc, curr) => yearsAsteroidsFound[acc] > yearsAsteroidsFound[curr] ? acc : curr) 
  return parseInt(yearMostAsteroidsFound)
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
