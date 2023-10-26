# HelloNgHttp

This project illustrates using RxJS in Angular, both in HttpClient and as a Subject to multicast events of interest among multiple components.

We use the following APIs:

* [ipify](https://www.ipify.org/)
* [open-meteo](https://open-meteo.com/)
* [IPgeolocation](https://ipgeolocation.io/)

All three are free for development purposes, but IPgeolocation requires a free token to track usage. Please [sign up](https://ipgeolocation.io/signup.html) to get a token and make it available to the application in a `.env.local` file (which is ignored by git):

```dotenv
NG_APP_IPGEO_API_KEY=your_token_here
```

Both making the application look pretty and pass unit tests are left as an exercise to the reader.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8 and uses [@ngx-env/builder](https://github.com/chihab/ngx-env) to inject secrets into the app. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
