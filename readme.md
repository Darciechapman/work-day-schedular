Work Day Schedular

For this assignment our objective was to create a simple workday planner, to organise events and tasks. The application displays the current date at the top, and hours 9-5 on the side of each task bar. The style of the task bar is to change according to the current time, indicating past present and future tasks. Each task bar has a save button option when clicked will save the task in local storage. 

Displaying current date

new Date() get the current date, then moment.js functions to change the format of the date. I used get date, get month, and get full year

Create an array for the displayed hour on each task bar

I created two sections for each hour. One for the html text, showing AM and PM. The value a 24hour format for easier reference when changing css class for past present and future. 

Creating the Task bar rows

I used a for Each function to loop through the hours array and created a container, time block, input and save button for each object in the array. 
Then did used an if statement to style the input text according to the current hour, so the css changing depending if that task was in the past, present or future. 

Save button click

Created a button on click function, for when the save button is clicked, save in local storage

Local storage function

This is the function I spent the most time on. I had troubles connecting the save button to the task bar it was next to. With a little google flu, I gave input and save button  ID’s, then used ID in the function. This way when an input runs through the local storage function, once it is saved in storage the key will be set by the same name as the ID it was saved through. Then return the key to HTML 


