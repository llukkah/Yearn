![YEARN Logo](./Assets/YearnLogo.png)
======   

**Yearn** is the ultimate digital, personal bucketlist travel app that allows you to organize your yearnings for wanterlust and motivate you to cross things off that list and **Find Your Saturday.**

It is the only to-do list that matters.

**Core Features / Goals**
Each user has the ability to create, update or delete the locations of their desire and take this list with them to stay organized, stay motivated, and most importantly, stay wandering.

### MVP 
#### Client Front End
Frontend - React
Frontend Deployment - Surge / Netlify

**WireFrame Images**
Desktop & Tablet Renderings are the Same
Refer to Wireframes Folder in this repository for a detailed view of each page's rendering.
![Wireframe Photo](./Wireframes/FullWireframe.png)

**Component Heirarchy**

    src
    |__ assets/
      |__ images
    |__ Wireframes/
      |__ Wireframes.jsx
    |__ components/
      |__ Header.jsx
      |__ Navigation.jsx
      |__ About.jsx
      |__ UserLanding.jsx
      |__ LocationCreate.jsx
      |__ LocationDetail.jsx
      |__ LocationEdit.jsx
      |__ Login.jsx
      |__ Register.jsx
**Component Breakdown**
Component | Type | State | Props | Description
------------ | ------------- | ------------ | ------------- | ------------ |
Header | Functional | No | No | Contains Navigation and Logo. |
Navigation | Functional | No | No | Contains Links: About, Login, Register, Add |
About | Functional | No | Props | Contains description of app. |
UserLanding | Class | Yes | Props | Contains cards of specific locations.  Header personally asking user "Where to?" and addressing their name. |
LocationCreate | Class | Yes | Yes | Contains form to add a new location.  When done, redirects to UserLanding component. |
LocationDetail | Functional | No | Props | Contains 3 cards of specified location and edit button. |
LocationEdit | Class | Yes | Yes | Contains form to edit specific details of location desired. |
Login | Class | Yes | Yes | Contains Login Form. |
Register | Class | Yes | No | Contains Register Form. |

#### Server Back End
Backend - Ruby on Rails
Backend Deployment - Heroku

**ERD Model**
![ERD Model Photo](./ERDModel.png)

**Data Heirarchy** - expected endpoints from API

**Dependancies**
| Library | Purpose |
| ------------ | ------------ |
React | Render Front End |
React Router | Render Front End |
CORS | Render Front End |



### Post MVP
Once MVP is complete future features that would benefit this app and take it to the next level include but not limited to:

- [ ] Packing List Model
- [ ] Comment Model
- [ ] Search Bar to see locations, other users, or tags.
- [ ] The functionality to contact other users via direct message
- [ ] Tags for specific locations
- [ ] Randomizer button link in Navigation Bar to display random location of another user & their bucketlist for that location for inspiration.  User's information will no be displayed; only location and bucketlist will be displayed.
