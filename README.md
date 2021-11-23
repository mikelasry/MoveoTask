# MoveoTask

* Introduction

-- This project is submitted as a job application task @MoveoGroup --
  
  Looking for the best framework to build a client-side-only project, 
  MoveoTask is an **Angular** project which is deployed at **AWS**:
  ( public DNS: IPv4: ec2-18-222-17-3.us-east-2.compute.amazonaws.com )
  
  Project has 3 main visual components:
  1. Users Table
  2. User's Details
  3. Contact User
  
  All three components uses user service. 
  Every component recieves the users service in it's constructor as a dependency injection,
  and uses it upon demand. The main users table component does it in an observer design pattern matter,
  as it signs with a callback to the service's observable list changes.

* Requirements
  Angular CLI: 12.1.1
  Node: 14.17.3
  Package Manager: npm 6.14.13
  OS: win32 x64
 
* Installation=-
  Clone the repository (https://github.com/mikelasry/MoveoTask.git)
  On the project directory npm install

* Configuration
  Navigate to the src/environments variables config file.
  Configure RandomUserAPI seed (SEED) and random users count (USERS_COUNT)

* Open Issues
  Since Angular Materials Table Component is more complexed component than most components, as it generates DataSource object,
  data table renders before API call comlpeted. 
  Updating the data after view load causes Angular Error (NG0100: Expression has changed after it was checked).
  Due to short deadline, this issue was patched with page "reload" by paging next page, then previouse one, and can be fixed upon request.

@@@@@@@@@@@@@@@@@@@@@@@@@@ The following are the task instructions by Moveo: @@@@@@@@@@@@@@@@@@@@@@@@@@@

  Create a page with a title “All users” with a table of users which will contain the following columns:
  - Picture (circled icon)
  - Full name (first letter of first name and last name)
  - Email (link to send the user new email - no actual mailing system required)
  - Gender
  
  Table should have pagination control:
  - every page should contain 10 rows
  - Add controls to move between pages
  
  When clicking on a user row, move to another page with a title “User Details” 
  and show the same data from the table, also show the   user address on a map with a pin. 
  Page url should contain the username. 
  
  General Notes:
  
  Use this free API service to get all the data you need : https://randomuser.me/documentation
  (pay attention to use a constant seed in order to get the same data)
  ** you should write the client side only! **
  
  The pages should be created by using a design library as material design for example.
  Make sure the pages is fully responsive.
  
  Bonus:
  Add sorters to table columns
  
  When submitting your solution please attach the following:
  1. An overall description of the assignment in English (no more than 1 page).
  2. Upload your code to GitHub and attach a link to your GitHub repository.
  3. Supply a URL link of your project deployment (deploy it to one of the hosting services).
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
