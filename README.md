# SearchProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Step to run the project:

1. `npm install` to install all the package dependencies.

2. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Note:
I tried to fetch data from the api. But got CORS error and tried with the angular CLI proxy prox.conf.json but does not help me. I could do it in server side but it was behind my scope. that's why I used postman and copied all the json data from there and put it into an object.

I left all the code as it is which were valid if the data were fetched from API.

Things for improvements:

1. remove 'any' and provide specific data type.
2. add unit test.
3. directly fetch data from API.
