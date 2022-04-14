This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# [CRW PROJECT](https://master--stellular-cheesecake-c2e6c6.netlify.app)
This project was made following "Complete React Developer in 2020 (w/Redux, Hooks, GraphQL)".
This is a small shop created width react, redux, reselect, firebase, stripe

- CI/CD: https://master--stellular-cheesecake-c2e6c6.netlify.app/



## INTRODUCTION
I'm growing on my knowledge in JS and React, it´is exciting for me to do this, understand interesting futures and learn best practices of React use.
Thank for my teachers great and hard work.

[@Xarlos_](https://twitter.com/Xarlos_) / [Carlos Gil Carrillo &#60;ixarlos/&#62;](https://ixarlos.com/)

## INSTALLED AND DEPLOYED ON [HEROKU](https://crwn-ixarlos.herokuapp.com)

This project was uploaded to [crw-ixarlos](https://crwn-ixarlos.herokuapp.com) and deployed on heroku.com

- Install [heroku cli, see more...](https://devcenter.heroku.com/articles/heroku-cli)

- Create new project with your `$APP_NAME` on your dashboard in heroku.com

- Login into heroku

  `$ heroku login`

- Link our project with heroku buildpack

  `$ heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack`

- Inside the project need to create heroku

  `$ cd ~/myapp`
  `$ heroku create`


- Push this and build the app

  `$ git push heroku master`

- This app was published

  [crw-ixarlos](https://crwn-ixarlos.herokuapp.com)

### TEACHERS

@From Andrei Neagoie and Yihua Zhang

### TIPS & INFO

#### .ENV

- Setting environment variable and create .env file

  `PORT=8000`

- Type this on bash (command)

  `$ export PORT=8000`

#### STRIPE [API](https://stripe.com)

Added payment method our app (Stripe)

- Testing credit card for stripe API ( Link: [http://stripe.com](https://stripe.com/docs/testing#cards) )

- Strpe Checkout for REACT ( Link: [http://react-stripe-checkout](https://github.com/azmenak/react-stripe-checkout) )

#### FIREBASE

- QueryReference

  Represent the "currend" place in the database, this object not have the actual data.
  Snapshot objetct is necesary to get the refe:rence data

  - Document

    `firestore.doc('/users/:userId')`

  - Collection

    `firestore.collection('/users')`

- DocumentReference

  - We use documentRef  obj. to perform our CRUD

    `.set(), .get(), .update() and delete()`

  - To add documents to our collectio we can use

    `.add() // collectionRed.add({ value : prop })`

  - We get the snapshotObject from referenceObject using

    `.get() // documentRef.get() or collectionRef.get()`

    - documentRef rerturns documentSnapshot object
    - collecionRef returns a querySnapshot object

- QuerySnapshot

  We get our querySnapshot object from a collectionReference object

  - Document Snapshot
  - Collection Snapshot

Example to load firebase collection

  ```` js

      import firebase from 'firebase/app';
      import 'firebase/firestore';
      import 'firebase/auth';

      const firebaseConfig = {
        apiKey: 'SOME-API-KEY',
        authDomain: 'domain.com',
        databaseURL: 'https://URL',
        projectId: 'proyId',
        storageBucket: 'crwn-db-be028.appspot.com',
        messagingSenderId: 'number',
        appId: 'appid',
        measurementId: 'messureId',
      };

      firebase.initializeApp(firebaseConfig);

      const firestore = firebase.firestore();

      const userRef = firestore.doc(users/${userAuth.uid});

      const snapShot = await userRef.get();

      if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const userRef = firestore.doc(users/${userAuth.uid});

        const snapShot = await userRef.get();


      if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createAt,
            ...additionalData,
          });
        } catch (error) {
          console.log('Error creating user', error.message);
        }
      }

  ````


- Securuty Rules

## TOPICS

The topics covered will be:

- React Basics [ &#9989; ]

- React Router [ &#9989; ]

- Redux [ &#9989; ]

- Redux Saga [ &#9989; ]

- Asynchronous Redux

- React Hooks

- Context API

- React Suspense + React Lazy

- Firebase [ &#9989; ]

- Stripe API [ &#9989; ]

- [Styled-Components](https://github.com/ZhangMYihua/lesson-26) [  &#9989; ]

- GraphQL

- Apollo

- PWAs

- React Performance [ &#9989; ]

- React Design Patterns

- Testing with Jest, Enzyme and Snapshot testing

- React Best Practices [ &#9989; ]

- Persistance + Session Storage [ &#9989; ]

- State NormalizationT


## Redux graphic guide

1. Redux Store

![Redux Store](/src/assets/readme-guide/redux-dispatch.gif "Redux Store")

2. Redux Middleware

![Redux Sagas](/src/assets/readme-guide/redux-middleware.png "Redux Sagas")

3. Redux Sagas

![Redux Sagas](/src/assets/readme-guide/redux-saga-flow.png "Redux Sagas")

4. Redux Sagas Flow
<<<<<<< HEAD

    - First go to the middlewares and reducers
    - Return to sagas and apply the changes


![Redux Sagas Flow](/src/assets/readme-guide/Redux-Saga.png "Redux Sagas Flow")

5. Stripe Payment 

![Stripe](/src/assets/readme-guide/stripe.png "Stripe")
=======
>>>>>>> edaf20d91aae95af9e5674d9c01a19c93cd1b78d

    - First go to the middlewares and reducers
    - Return to sagas and apply the changes


![Redux Sagas Flow](/src/assets/readme-guide/Redux-Saga.png "Redux Sagas Flow")




