## PCB 
Personal Challenge from Breadboard

This is a nest.js application comprised of one endpoint which accepts POST requests containing data which represent valid electronic components.

Notes on Nest.JS

There is a lot to appreciate with this framework and it appears to have everything you need– including things you didn't know you needed. I have this feeling that devs who enjoy Angular feel right at home. 

Never having used Nest.JS, I toggled between reading the documentation carefully, and just getting something built. I was rather surprised to find out that this framework is default built on top of express.js.

Ultimately, I find this framework slow to do simple things (serve static assets, manipulate response statuses, isolate router logic, import a 3rd party library, etc) because there is such a right "nest" way of doing things. 

### Running the project

1. clone this repo
2. ensure you nave node `16` or greater installed
3. cd into repo and `yarn install`
4. `yarn run test:e2e` to run the tests against base functionality
5. `yarn run start` to interact with the server yourself

### Points of interest

- While the constraints of the project ask to validate _fields_ and _types_, a production application would likely call for validation on the _values_ as well (whether a value is in range, meets character specifications, etc)

- `src/constants.ts` contains the data constraints for the project and would likely need to be reorganized once the project grows. This is valid for the point of time that the project finds itself in

- `src/PCBComponents.ts` is doing nothing but likely would be used if the application were to grow




