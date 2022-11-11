## About

A project to learn about API designs and better api methods in NODE.JS from a course on frontend masters.

Aslo did some little tests with jest and supertest to test the api endpoints.🧪

Project was deployed on render and can be found [here](https://api-design-nodejs-zr3v.onrender.com/)

## How to use

Available routes include

- /
- /api (for accessing main api)
  - /products
  - /updates
- /user ( to create user)
- /signin (to sign in user)

### API ENDPOINTS

| URI              | Method | Description                                                                         |
| ---------------- | ------ | ----------------------------------------------------------------------------------- |
| /                | GET    | Welcome route                                                                       |
| /user            | POST   | To create a new user                                                                |
| /signin          | GET    | To signin a user and get a bearer token                                             |
| /api/product     | GET    | Get a list of products                                                              |
| /api/product/:id | GET    | Get a specific product by ID                                                        |
| /api/product/:id | PUT    | Update a specific product by ID                                                     |
|                  |        | - Validates the 'name' field (must be a string)                                     |
| /api/product     | POST   | Create a new product                                                                |
|                  |        | - Validates the 'name' field (must be a string)                                     |
| /api/product/:id | DELETE | Delete a specific product by ID                                                     |
| /api/update      | GET    | Get a list of updates                                                               |
| /api/update/:id  | GET    | Get a specific update by ID                                                         |
| /api/update/:id  | PUT    | Update a specific update by ID                                                      |
|                  |        | - Validates optional 'title', 'name', 'version' fields                              |
|                  |        | - Validates 'status' field (must be one of: "IN_PROGRESS", "SHIPPED", "DEPRECATED") |
| /api/update      | POST   | Create a new update                                                                 |
|                  |        | - Validates 'title', 'body', 'productId' fields                                     |
| /api/update/:id  | DELETE | Delete a specific update by ID                                                      |
