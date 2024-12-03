# Plan-it!

[See Live Demo of this Template](https://drt-next-js-template-app-router.netlify.app/)

## Overview
Welcome to Plan-it! This web app was designed to solve a common problem that most teachers around the world deal with day to day - managing their classrooms. 

A lot of teachers rely on a notebook to keep track of their students which may be efficient for some, but for most this can lead to all sorts of problems. With Plan-it!, users will have the tools they need to better manage their classrooms by having the ability to view their classrooms, add or transfer students, track attendance, and more. 
___

## Is Plan-it! for me?

Not every teacher is the same. Some may only teach for a couple periods, some may teach multiple period throughout the day multiple times a week. For those that use notebook/pen and paper, this can be inefficient and stressful especially if you were to lose your notebooks, lesson planners, etc.

Plan-it! are for those teachers that wants to take better controll of their classroom using modern solutions. You can use any browser on any computer and mobile device to enjoy the features of this web app.


## Features

MVP Features:
- Ability to create, edit, and delete multiple classrooms and add students. Both represented as cards that  shows the information you need.
- Transfer students to different classes or remove them from a class.

Stretch Features:
- Grade book that allows users to keep track of students' grades based on a few categories (homework, classwork, etc.)
- Ability to search for students and classrooms on relevant pages.
- Attendance log.
- Weekly agenda.

## Screenshots


## Wireframe + Deployed Project + Project Board
[Figma wireframe](https://www.figma.com/design/nMCpiAB6KIoJ1qiKmg6lW4/plan-it!?node-id=844-27&t=6X6siHIfaxrDnEtB-1)

[Link to deployed project using Netlify](###)

[GitHub Project board](https://github.com/users/Gnashed/projects/5/views/1)

___

## Loom Video

### Deploying on Netlify
Netlify will automatically detect your project and prepopulate the settings, but should something go wrong and it does not, here are the commands:

- Build Command: `npm run build`
- Publish directory: `.next`

#### Additional Steps to Take on Netlify
- Add Environmental Variables
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there if you did not add them when you were deploying your site

- Update Firebase URL Settings
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
