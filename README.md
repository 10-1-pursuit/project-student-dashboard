# Student Dashboard Application

The Student Dashboard Application provides a user-friendly platform to access and manage student information, notes, and progress. This guide will walk you through the application's key features and functionalities.

## Table of Contents

- [Getting Started](#getting-started)
- [Dark Mode](#dark-mode)
- [Cohort Selection](#cohort-selection)
- [Student Information](#student-information)
- - [Basic Student Card](#basic-student-card)
- - [Expanding Student Details](#expanding-student-details)
- [Adding Notes](#adding-notes)
- [Show More / Show Less](#show-more--show-less)
- [Contact and Support](#contact-and-support)

## Getting Started

1. Fork and clone this repository to your local machine or [Click Here](https://chimerical-shortbread-d110bd.netlify.app/).
2. Navigate to the project directory and install the required dependencies:

```
npm install
```
3. Start the application using Vite:

```
npm run dev
```

## Dark Mode

- To enhance readability, you can toggle between light and dark themes by clicking the "Dark Mode" button at the top-right corner of the screen.

## Cohort Selection

- On the left side of the screen, you will see a list of cohorts sorted by season and year.
- Click on a cohort to filter and display students belonging to that specific cohort.

## Student Information

### Basic Student Card

- Each student is represented by a card displaying their:
  - Photo
  - Full name
  - Username
  - Date of birth
  - If a student is on track to graduate (based on various criteria, such as certifications, Codewars score, and assessment performance), the card will display "On Track to Graduate".

### Expanding Student Details

- Click on a student's name to reveal additional details.
- The expanded view includes comprehensive information about the student's progress and achievements.

## Adding Notes

1. Expand a student's details by clicking "Show More..."
2. Scroll down to the "1-on-1 Notes" section.
3. Enter your name in the "Commenter Name" field.
4. Enter your comment in the "Comment" field.
5. Click the "Add Note" button to append your note to the student's record.
6. Your note will appear in the list of notes associated with that student.

## Show More / Show Less

- Click "Show More..." at the bottom of a student's card to reveal additional information.
- This includes Codewars progress, scores (assignments, projects, assessments), certifications, and notes.
- To collapse the additional information, click "Show Less..." to return to the main view.

## Contact and Support

For any questions or support, please contact our support team at support@example.com.