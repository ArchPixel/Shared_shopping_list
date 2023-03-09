# Project 1: Shared shopping list

This is a hand-in exercise project for the course Web Software Development 2023 Spring.

The web application is mainly built with JavaScript and Deno using Visual Studio Code. It provide some simple shopping list functions, which you could use to add items and mark them as collected. And it is developed using docker/docker compose containerizations. This application has NOT been deployed online.

## Content of the .zip file

There are 3 files + 4 folders in total inside the zip package: 
1. README.md ----------------> Project documentation.
2. docker-compose.yml -------> Configuration file for running docker compose.
3. project.env --------------> Configurations of database + the Deno cache location. 
________________________________________________________________________________________________
4. app-cache ----------------> Deno cache location.
5. e2e-playwright -----------> 5 end-to-end tests inside the file:./tests/function_check.spec.js
6. flyway -------------------> Database schema is inside the file: V1__initial_schema.sql
7. shopping-list ------------> The structure of this folder is as follows:

## Folder Structure of the main application
    .
    |___......(other folders for running docker images,e2e test etc.)
    |___shopping-lists
         |___app.js
         |___deps.js
         |___views
         |     |___index.eta
         |     |___lists.eta
         |     |___items.eta
         |     |___layouts
         |           |___layout.eta       
         |___controllers
         |     |___statisticControllers.js
         |     |___listControllers.js
         |     |___itemControllers.js
         |___utils
         |     |___requestUtils.js
         |___services
         |     |___statisticServices.js
         |     |___listServices.js
         |     |___itemServices.js
         |___database
               |___database.js

## How to run the web application locally

-  This application is built with Docker Compose version 2.14.1. Compose V2 has some differences with Compose V1. For example, the command used to run the Compose V1 is '''docker-compose''' , whereas in V2, you use '''docker compose''',replacing the hyphen ('''-''') with a space. For more detailed information, please visit this [link](https://docs.docker.com/compose/compose-v2/).
-  The docker version used is: <mark>v20.10.22, build 3a2c30b</mark>
-  The OS used for this project is a Debian 10(code name buster) based linux distro.
-  Here are some steps I used to run the application locally using VS code (assuming the docker/docker compose are correctly installed):
   -  open the integrated Terminal
   -  make sure pwd is the correct one
   -  run '''docker compose build'''
   -  run '''docker compose up'''
   -  open a brower (Chrome recommended) and go to the [link](http://localhost:7777/)



    
    
    
    
 




