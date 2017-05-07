# Tourist App
The main goal of this app is to plan for tourist destinations . A user can create a plan and enter data like location,attraction,approx_cost,holiday_type and transport_type.
The user can view ,update and delete entries in the project.
This app secured with https .

# Getting Start
First of all you will need to have Node js on your machine to run this project .Here is a link where you can download node js https://nodejs.org/en/download/

Next you need to have MongoDB as well.Here you can download MongoDB :
https://www.mongodb.com/download-center?jmp=nav#community

You will also need the REST Chrome app plugin for this app :
https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo

Or you could download Postman if the first options does not suit you:
https://www.getpostman.com/

# Installing the app 
First thing you need to is perform the following command :

```npm install express -g```
 After you all the packages are installed you are ready to go !
 
# Running the app

You should now be able to run your application and see a generic Express application with the following command :

```node touristapp.js```

# Commands in the app 
To get and add you will need to type the following into the advanced rest client :

http://localhost:80/api/planner/

To update or delete: 

http://localhost:80/api/planner/id

In order to run this in your browser or REST service you need to use the following url :https://localhost:3443/api/planner/

# Deployment 
I have deployed the app in Heroku and AWS.

Heroku link :https://agile-basin-98265.herokuapp.com/

AWS: ec2-34-208-219-17.us-west-2.compute.amazonaws.com

# Built with
Sublime

# Author
Arthur Hovsepyan - WIT Student

