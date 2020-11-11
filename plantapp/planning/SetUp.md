# First steps to creating a React APP

npx create-react-app blog
npm install react-router-dom
npm install styled-components



# Linking Backend to Front End
look in your dependices in package.json to see which npm i axios commands you need to run




Here's a rough outline of how you should go about building react apps! Follow these suggestions, or don't, but they will probably help you a lot if you do them in order. I suggest reading through all of the steps before you start so you can become familiar with the big picture of the entire process.
	1. Start a new app using create-react-app. Call it user-router or something similar, it doesn't matter. You will be building four components (not including App.js). Each one will render something different:
Home  "This is the homepage"  /
Greet  A greeting from a url parameter passed in  /greet/:param
Users  A list of users  /users/
NewUser  A form that lets you add a username  /users/new
	1. Set up react-router like we did in this lesson, at the top level. What is the top level of a React app?
	2. Build out each component with placeholders to render something. Do this first, before starting to add state, props, or functionality.
	3. Set up your routes so that each route only displays the appropriate component.
	4. Plan out where you think your state should live. If you have to share state between multiple components, what's the best place to keep it? Think about what your state needs to contain.
	5. Initialize your state and pass it down to the appropriate components.
	6. Wire up those components to be able to display and update the state as necessary. Add the functionality to have the greet component receive and display a parameter.
Marvel at your creation and your progress after only 8 weeks of programming!