# hmpps-it-incident-hub
An application to provide 1st line support for applications, allowing users to view FAQs and submit an incident directly into ServiceNow.

## IMPORTANT
This is currently an alpha/beta phase prototype and currently in development.

## Infrastructure

This project is managed through both [DPS Project Bootstrap](https://github.com/ministryofjustice/dps-project-bootstrap) and [Cloud Platform Environments](https://github.com/ministryofjustice/cloud-platform-environments). Changes to the namespace, RBAC etc should be done through these projects.

## Running the app
The easiest way to run the app is to use docker compose to create the service and all dependencies. 

`docker-compose pull`

`docker-compose up`

### Dependencies
The app requires: 
* hmpps-auth - for authentication
* redis - session store and token caching
* nodejs - version 16

### Running the app for development

To start the main services excluding the main app: 

`docker-compose up --scale=app=0`

Install dependencies using `npm install`

Using your personal client credentials, create a .env local settings file

```bash
REDIS_HOST=localhost
HMPPS_AUTH_EXTERNAL_URL=https://sign-in-dev.hmpps.service.justice.gov.uk/auth
HMPPS_AUTH_URL=https://sign-in-dev.hmpps.service.justice.gov.uk/auth
NODE_ENV=development
API_CLIENT_ID=<yourlocalclientid>
API_CLIENT_SECRET=<yourlocalclientsecret>
SYSTEM_CLIENT_ID=<yourlocalclientid>
SYSTEM_CLIENT_SECRET=<yourlocalclientsecret>
WEB_SESSION_TIMEOUT_IN_MINUTES=300
SERVICENOW_API_URL=https://mojuat.service-now.com/
```

And then, to build the assets and start the app with nodemon:

`npm run start:dev`

### Run linter

`npm run lint`

### Run tests

`npm run test`

### Running integration tests

For local running, start a test db, redis, and wiremock instance by:

`docker-compose -f docker-compose-test.yml up`

Then run the server in test mode by:

`npm run start-feature` (or `npm run start-feature:dev` to run with nodemon)

And then either, run tests in headless mode with:

`npm run int-test`
 
Or run tests with the cypress UI:

`npm run int-test-ui`


### Dependency Checks

This project has implemented some scheduled checks to ensure that key dependencies are kept up to date.
