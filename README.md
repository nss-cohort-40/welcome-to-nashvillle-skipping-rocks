Skipping Rocks Group Project! Readme

# Instructions for Using Skipping Rocks Application
1. Visit this link: https://github.com/nss-day-cohort-40/welcome-to-nashville-skipping-rocks
2. Download or clone the files.
3. In the terminal, change the directory into the src directory. 

4. Enter the command hs -o to open the application in the web browser.

5. Enter "Yes" or "No" if you are looking for canoeing activities at a park. 

6. Enter a specific artist's first name (must be capitalized) in the museums search bar if you're looking for a particular artist's work.

7. After the search returns results you can scroll through the results and then add that item to your itinerary by clicking the save button below the item.

# Welcome to Nashville: Build an itinerary for a day trip to Music City

In this app users can search for four different things to do/visit in Nashville:
* parks -- using the Nashville [Metro Gov API](https://dev.socrata.com/foundry/data.nashville.gov/xbru-cfzi)
* public art collections -- using Nashville [Metro Gov API](https://dev.socrata.com/foundry/data.nashville.gov/eviu-nxp6)

You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

1. Functions
1. Github
1. CSS
1. Building DOM components
1. Handling user events
1. Modular code
1. Semantic HTML
1. [Valid HTML5](https://validator.w3.org/)

## Itinerary Builder

When the user searches for any of the two categories of things to do, the results should be listed in the DOM. Each result item should have an affordance to add the item to the current itinerary.

## Professional Requirements

1. Only one itinerary needs to exist at a time. If a user selects an item to add to the itinerary, and an item already exists for that category in the itinerary, then you will need to update the corresponding itinerary item in the DOM with the new data.
1. All teammates must be using http-server during development. `json-server` should only be used if you have time to work on the stretch goal (_see below_).
1. Each teammate is responsible for one API module. If your group has five members, one person is responsible for the module that interacts with the DOM and the data from the API modules. In a four-person team, the team will decide how to handle the development of that module.
1. The README for your project should include instructions on how another person can download and run the application. **PRO TIP:** Don't wait until the very end to create the README. [Readme Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. DO NOT FORGET to use a `.gitignore` file to keep git from tracking `.DS_Store`, and, if necessary, API directory (stretch goal).
1. CSS for structure is part of MVP. CSS for style (animations, colors, fonts) is _secondary_. Do not add any additional visual enhancements until you have a fully functional app. 
1. The goal of every member of the team is to _implement functionality with JavaScript_.

## Visual Feature List

To help you along, here is the Project Checklist we created for us to follow while coding:

(https://github.com/nss-cohort-40/welcome-to-nashvillle-skipping-rocks/projects/1)