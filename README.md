# Users Gallery #


![Profile Gallery - Google Chrome 1_15_2023 6_39_14 PM](https://user-images.githubusercontent.com/62514538/212557504-492ae056-7d64-4512-9b0b-30fe998547f1.png)

https://usersgallery.web.app/

Users Gallery is an application that presents a list of cards containing random individuals' names, images, usernames, age and other information associated with each of them. It is built solely with React.js 

## What It does ##


The application carries out the following actions:
* Fetching users details via API using the fetch method.
* User login authentication using localstorage.
* Built in pagination to browse through gallery list.
* Selection of favorite users upon authentication in a seperate list from the general profile list.
* Search functionality to filter through users and return a specified user/users.

### React technologies used ###

* useContext and useState for managing app wide and component based state.

* Suspense and Lazy for enacting lazy loading of pages for app perfomance based enchanement.

* useEffect, useCallback and useMemo for handling the rendering state amd sideeffects.

* useRef for getting input values.

* Switch, Route, useHistory and BrowseRouter from react-router-dom that handles the routing of the applications pages.

## Getting Started Locally ##
Developers are free to use and contribute to this project by just following the simple steps below:
1. Clone the repository and install dependencies
```
 git clone https://github.com/Fransco35/UsersGallery.git
 cd UsersGallery
 npm install
```
2. Run the start script using npm to start the application in your local server
```
npm start
```
That's it, you're good to go.

