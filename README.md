# Academia web client (POC)

## Requirements

- Node v9.11
- npm

## Tools used
- Vuex: https://vuex.vuejs.org/guide/
- Vueify (allows us to include template, js, and css in a single file for each component): https://github.com/vuejs/vueify
- vue-cli (used to generate scaffold for app)

## Instructions for running locally
- `npm install` to install all dependencies
- `npm run dev` to serve app at localhost
- If running Rails API locally as well (with a seeded db) you should see the seeded data in your browser.

## Other resources
- Got lots of help from this example repo using many of the same tools: https://github.com/gothinkster/vue-realworld-example-app

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# lint all *.js and *.vue files
npm run lint

# run unit tests (haven't written any yet, so don't bother as the only one there is the example that was generated)
npm test
```
