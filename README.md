# Project REST-Rant

REST-Rant is an app where users can review restaurants.

TBD - SUMMARY

## Tech Usage

**CSS Framework:** Bootstrap

**Stack:** MongoDB, Express, NodeJS

**Server-Side Rendering:** JSX

**Node Modules**: method-override, dotenv, express-react-views

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

## Database

**places**

| Field    | Type      |
| -------- | --------- |
| \_id     | Object ID |
| name     | String    |
| city     | String    |
| state    | String    |
| cuisines | String    |
| pic      | String    |

**rants**

| Field    | Type                  |
| -------- | --------------------- |
| \_id     | Object ID             |
| place_id | ref(places) Object_Id |
| rant     | Boolean               |
| rating   | Number                |
| comment  | String                |
| reviewer | String                |

## Planning

### User Stories

TBD
