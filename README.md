# Project Overview
This project is meant to satisfy the Phase #1 Project requirements for the Flatiron School Software Engineering Curriculum. 

# Objectives
- Design and architect features across a frontend
- Communicate and collaborate in a technical environment
- Integrate JavaScript and an external API (or created API via JSON Server)
- Debug issues in small- to medium-sized projects
- Build and iterate on a project MVP

# Requirements
Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.

Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

Your app needs to incorporate at least 3 separate event listeners (DOMContentLoaded, click, change, submit, etc).

Some interactivity is required. This could be as simple as adding a "like" button or adding comments. These interactions do not need to persist after reloading the page.

Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

### Stretch Goals
Use json-server in your project to persist your app's interactivity.

# Usage and Setup
This app is designed to run using the included db.json file. In your terminal, make sure to run the line json-server --watch db.json in order to begin use of the local server. Without this, the pose information will not populate, nor will the functions work properly as they reference the data using fetch() get and patch commands. 

# Functions
This webapp will allow the user to look up yoga poses based on a set of user provide criteria and save the poses to to create a practice sequence that is saved to the database for future recall.

Poses and associated information are stored in the db.json file. The contents of this file are used to populate the features on the page. This can either be populating information about a selected pose or a created list of poses that meet a specific search criteria. 

All searches are done using input created by the selection of an option in a dropdown menu. These menus are either populated manually (such as in the movement type and sequence drop-downs) or populated via an algorithm that includes the addition of new HTML elements. 

Other features include the opportunity to "favorite" a selected pose in the Quick Search card, which then changes the data in the database for that pose and ensures that it is included in the displayed list of poses that meet that search criteria via the "Selected Favorites" dropdown menu. 

# Sources and Inspiration
My wife is working on her Yoga Teacher Training (YTT) and having an on hand reference to search for poses based on different criteria will help her to create unique classes that still follow traditional sequences. It is also common for students to not recall the specific details of a pose after a class and can use this app to look up that information. 

# License
