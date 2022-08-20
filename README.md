# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| METHOD | PATH                     | PURPOSE                                 |
| ------ | ------------------------ | --------------------------------------- |
| GET    | /                        | Home Page                               |
| GET    | /places                  | Places index page                       |
| POST   | /places                  | Create new place                        |
| GET    | /places/new              | form page for creating a new page       |
| GET    | /places/:id              | Details about a particular place        |
| PUT    | /places/:id              | Update a particular place               |
| GET    | /places/:id/edit         | Form page for editing an existing place |
| DELETE | /places/:id              | Delete a particular place               |
| POST   | /places/:id/rant         | Create a rant about a place             |
| DELETE | /places/:id/rant/:rantid | Delete a rant about a place             |
| GET    | \*                       | 404 page                                |
