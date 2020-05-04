# Backend

---

Deployed Backend: [https://build-week-pintereach-pt.herokuapp.com/](https://build-week-pintereach-pt.herokuapp.com/)

_Pintereach_ is a full-stack web application that was built during a "build week" by [Lambda School](https://lambdaschool.com/) students. Each student fulfills a role in the project to collectively build the application.

_Pintereach_ gives users a site where they can organize research articles.

## Using

---

- [Node.js](https://en.wikipedia.org/wiki/Node.js) - JavaScript runtime for executing JavaScript at the server outside the browser
- [Express.js](https://expressjs.com/) - Lightweight web framework to bootstrap Node.js APIs
- [SQLite](https://www.sqlite.org/index.html) - Super lightweight database to bootstrap development environments
- [Knex.js](https://knexjs.org/) - A SQL query builder that helps abstracting migrations and DDLs for different database types into a single coherent structure
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - A module to help make passwords more secure
- [CORS](https://www.npmjs.com/package/cors) - A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
- [Helmet](https://www.npmjs.com/package/helmet) - A collection of 14 smaller middleware functions that set HTTP response headers
- [JWT](https://jwt.io/) - JSON Web Token for authorization and client side tokens for security
- [Supertest](https://www.npmjs.com/package/supertest) - A test module for HTTP assertions
- [Jest](https://jestjs.io/) - A simple JavaScript testing framework
- [Dotenv](https://www.npmjs.com/package/dotenv) - a zero-dependency module that loads environment variables from a .env file into process.env

## USER ENDPOINTS
#### Base URL: https://build-week-pintereach-pt.herokuapp.com/

| Endpoint | Request Type | JSON Web Token | Request | Response |
| - | - | - | - | - |
| /api/user/register | POST | :x: | {username: "" , password: "" , email: "" , name: "" , field_of_study: "" , occupation: ""} | {welcome: username , password: encrypted string} |
| /api/user/login | POST | :x: | {username: "", password: ""} | {userobject , token} |
| /api/user/ | GET | :x: | | [{users}] |
| /api/user/:id | GET | :x: | {id: int} | {username: string , name: string , field_of_study: string , occupation: string} |

### Examples:
 ---
##### Create new user
#
    /api/user/register
    POST

- JWT protected (header) :x:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    username: "IndiWhip",
    password: "password1",
    email: "dr.jones@marshall.edu",
    name: "Indiana Jones",
    field_of_study: "archaeology",
    occupation: "professor"
  }
  ```
 ---
##### Login user
#
    /api/user/login
    POST

- JWT protected (header) :x:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    username: "IndiWhip",
    password: "password1"
  }
  ```
 ---
##### Get all users
#
    /api/user/
    GET

- JWT protected (header) :x:
- payload (body) :x:

 ---
##### Get user by ID
#
    /api/user/:id
    GET

- JWT protected (header) :x:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    id: 1
  }
  ```
 ---

## BOARD ENDPOINTS
#### Base URL: https://build-week-pintereach-pt.herokuapp.com/

| Endpoint | Request Type | JSON Web Token | Request | Response |
| - | - | - | - | - |
| /api/boards/ | POST | :heavy_check_mark: | {user_id: int , name: ""} | {id} |
| /api/boards/ | GET | :x: | | [{boards}] |
| /api/boards/user/:id | GET | :x: | {user_id: int} | {user_id: int , [{boards}] |
| /api/boards/:id | PUT | :heavy_check_mark: | {id: int , user_id: int , name: ""} | {user_id: int , name: ""} |
| /api/boards/:id | DELETE | :heavy_check_mark: | {id: int} | Success |

### Examples:
 ---
##### Create new board
#
    /api/boards/
    POST

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    user_id: 1,
    name: "New Board Name"
  }
  ```
 ---
##### Get all boards
#
    /api/boards/
    GET

- JWT protected (header) :x:
- payload (body) :x:

 ---
##### Get boards by user ID
#
    /api/boards/user/:id
    GET

- JWT protected (header) :x:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    user_id: 1
  }
  ```
 ---
##### Edit board
#
    /api/boards/:id
    PUT

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    id: 1,
    user_id: 1,
    name: "Edited Board Name"
  }
  ```
 ---
##### Delete board
#
    /api/boards/:id
    DELETE

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    id: 1
  }
  ```

 ---

## ARTICLE ENDPOINTS
#### Base URL: https://build-week-pintereach-pt.herokuapp.com/

| Endpoint | Request Type | JSON Web Token | Request | Response |
| - | - | - | - | - |
| /api/articles/ | POST | :heavy_check_mark: | {board_id: int , link: "" , description: ""} | {id} |
| /api/articles/ | GET | :x: | | [{articles}] |
| /api/articles/board/:id | GET | :x: | {board_id: int} | {board_id: int , [{articles}] |
| /api/articles/:id | PUT | :heavy_check_mark: | {id: int , board_id: int , link: "" , description: ""} | {board_id: int , link: "" , description: ""} |
| /api/articles/:id | DELETE | :heavy_check_mark: | {id: int} | Success |

### Examples:
 ---
##### Create new article
#
    /api/articles/
    POST

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    board_id: int ,
    link: “http://www.website.com” ,
    description: “This description is describing the website very well.”
  }
  ```
 ---
##### Get all articles
#
    /api/boards/
    GET

- JWT protected (header) :x:
- payload (body) :x:

 ---
##### Get articles by board ID
#
    /api/articles/board/:id
    GET

- JWT protected (header) :x:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    board_id: 1
  }
  ```
 ---
##### Edit article
#
    /api/articles/:id
    PUT

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    id: 1,
    board_id: 1,
    link: “http://www.updatedwebsite.com” ,
    description: “This updated description is describing the website even better.”
  }
  ```
 ---
##### Delete article
#
    /api/articles/:id
    DELETE

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    id: 1
  }
  ```

 ---