# Friend Finder App

## Overview ##

Using Node & Express, this full-stack Friend Finder app will take in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

**Link to App:**  https://blooming-spire-57231.herokuapp.com/

## Instructions ##


1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

3. Your `htmlRoutes.js` file should include two routes:

- A GET Route to /survey which should display the survey page.
- A default, catch-all route that leads to home.html which displays the home page.

4. Your `apiRoutes.js` file should contain two routes:

- A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
- A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

5. You should save your application's data inside of app/data/friends.js as an array of objects.

6. Determine the user's most compatible friend using the following as a guide:
- Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
- With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
- The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.

- The modal should display both the name and picture of the closest match.

### Thanks for visiting and enjoy the app! ###



