


# Student Dashboard Project

For this assignment, I built a mock student dashboard app. Using a JSON data file that was provided. The default view upon opening the app displays a complete list of all the students from every cohort for a period of two years. Users can choose to view students from a single cohort as well by clicking on the cohort name in the left column. 

The student cards include a headshot along with the student's name, userid(email) and birth date by default. It will also display to the right if the student is currently on track to graduate in the default view. 

Each student card can be selected one at a time to view more details of the student's progress using the "Show More" link. This will expand the card you select to display the students Code Wars results along with the average scores for the student's assessments, projects and assignments. The third column displays the status of four different certifications required for graduation. All of this data is used to determine the "On Track to Graduate" status.

Lastly, you'll find a section for individual notes and comments to or from the student.


## Resources

This project included some existing code to connect all the features.
- [`src/data/data.json`](./src/data/data.json): The JSON file provides the following data for all 200+ students:
  - `id`: A unique ID associated with each student.
  - `profilePhoto`: A url link to a randomly generated headshot.
  - `cohort`: this is the "season" and year which the student entered the program.
  - `preferredName`- student's first name.
  - `middleName` - student's middle name.
  - `surname` - student's last name.
  - `username` - student's email address.
  - `dob` - date of birth in the following format x/x/xxxx.
  - `codewars` - data fields for current total, last week's total, goal and the percent of goal achieved.
  - `scores` - data fields showing the average scores for assessments, projects and assignments.
  - `certifications` - boolean data fields showing the status for the following certifications: resume, linkedin, github and mockInterview.
  - `cohort` - data fields for the cohort code and start date.
  - `comment` - info for any comments added to their card  including the commenter.
 

## Deployed Application

[`My Student Dashboard Application URL`]([https://ephemeral-chimera-961557.netlify.app/])  

