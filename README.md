
#### Getting Started

* Clone this repo
* cd component-library-starter
* npm install
* npm run build
* npm start (then go to http://localhost:3000)

#### Build & Publish

* npm run build
    * This creates two directories under /dist
        * app (application)
        * lib (library module to be published on the registry)
* npm version patch|minor|version (read about [semver](http://semver.org/))
* npm publish (this publishes the lib to artifactory)

#### Collaborate

* Join the conversation on Github
