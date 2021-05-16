
### Introduction

this is the solution for the task https://github.com/gemography/backend-coding-challenge/blob/master/README.md.

objective : 
* Develop a REST microservice that list the languages used by the 100 trending public repos on GitHub.
* For every language, you need to calculate the attributes below 👇:
  * Number of repos using this language
  * The list of repos using the language

### Overview

this microservice has only 1 endpoint: 
"/github-repos"

* when you hit this endpoint it returns a JSON object :
```
{
    languages_count: number,
    lanugages_list : [languages],
    languages_details :{
        language_1:{name: name, repos_number: no of repos in the top 100 using this language, repos_array: [list of repos]},
        language_2:{....}
    }
}
```
* this object has all the information required: 
      languages in most 100 trending repos : object.lanugages_list
      for every language :
            Number of repos using this language : object.languages_details.language_name .repos_number
            The list of repos using the language : object.languages_details.language_name .repos_array

* there is a test case to test this object in test/github-repos.test.js

### Tech Stack

Our tech stack will include:

* **ExpressJS** to be our backend server


### Main Files: Project Structure

  ```
  ├── README.md        
  ├── app.js *** the server app , has our endpoint\n
  ├── package.json *** The dependencies we need to install with "yarn  or npm install"
  ├── utils
  │   ├── analyzeGithubRepos.js 
  │   └── date_tools.js
  └── test
  │    └── github_repos.test.js *** 1 test case to make sure endpoint returns correct object
  └── controller
      └── github_repos.controller.js      
  └── services
      └── github_repos.service.js         
  ```

Overall:
* tests are in test/github_repos.test.js.
* Controllers are located in controller/github-repos.controller.
* service is found in services/github_repos.service.js
* helper functions are found in utils folder


### Development Setup


To start and run the local development server,

1. Install the dependencies:
  ```
  $ yarn or npm install
  ```

2. Run the development server:
  ```
  $npm start or node app.js

  ```
3. Run test using :
  ```
  $npm test
  ```  
4. request this endpoint using GET method from postman or curl: localhost:5000/github-repos
