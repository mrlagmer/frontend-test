# SITEPOINT FRONTEND TEST (Stu's Version)

This has been built with React and Redux + some other helpers to give logging and middleware. I have created one test. Will add more once I better understand how to test using mocha.

All the code is in the src folder and is using ES2015 so also using babel. babel also used to handle the React jsx to js.

Folder Layout

-- Components (contains the counters and the input for the UI. They are dumb components)

-- Containers (Contains the container react commpoents or the smart components)

-- css just has the css from foundation

-- State (Has the redux confiure store and the Counters.js file that contains the actions + action creators and the reducer)

-- Static is where the app is built into.

-- Test contains the single test I wrote.

You need to create a simple counter application that can do the following:
* Add a named counter to a list of counters
* Increment any of the counters
* Decrement any of the counters
* Delete a counter
* Show a sum of all the counter values
* It must persist data back to the server

We have provided:
* Compiled Directory: of `/static/`
* `/static/index.html` that will be served at `localhost:3000` when the server is running
* `/static/app.js` and `/static/app.css` will be used automatically by `/static/index.html`

> If you need other publicly available files, other than `index.html`, `app.js`, `app.css` you will have to modify the server code in `/index.js`

Some other notes:
* The design, layout, ux, is all up to you.
* You can change anything you want (server stuff included) as long as the above list is completed.
* This isn't a backend test, don't make it require any databases.
* If you decide to use a precompiler of any kind (js/css/etc..) we need to be able to run it with `npm run build`.
* We don't want to run any `npm install -g whatever` commands. **NO GLOBAL DEPENDENCIES**
* Tests are good.

A possible layout could be:
```
         Counter App
+-----------------------------+
| Input                   [+] |
+-----------------------------+
+-----------------------------+
| [x] Bob           [-] 5 [+] |
| [x] Steve         [-] 1 [+] |
| [x] Pat           [-] 4 [+] |
+-----------------------------+
+-----------------------------+
| Total                    10 |
+-----------------------------+
```

## Install and start the server

```
$ npm install
$ npm start
$ npm run build #[optional] use for any precompilers you choose
```

## API endpoints / examples

> The following endpoints are expecting a `Content-Type: application/json`

```
GET /api/v1/counters
# []

POST {title: "bob"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 0}
# ]

POST {title: "steve"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 0},
#   {id: "qwer", title: "steve", count: 0}
# ]

POST {id: "asdf"} /api/v1/counter/inc
# [
#   {id: "asdf", title: "bob", count: 1},
#   {id: "qwer", title: "steve", count: 0}
# ]

POST {id: "qwer"} /api/v1/counter/dec
# [
#   {id: "asdf", title: "bob", count: 1},
#   {id: "qwer", title: "steve", count: -1}
# ]

DELETE {id: "qwer"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 1}
# ]

GET /api/v1/counters
# [
#   {id: "asdf", title: "bob", count: 1},
# ]
```

> **NOTE:* Each request returns the current state of all counters.
