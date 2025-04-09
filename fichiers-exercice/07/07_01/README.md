# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## install & run


```bash
cd myapp
npm install
npm run start
```

## API Access - [OpenWeather](https://home.openweathermap.org/)

The client communicates with the server at:

###  Step 1: Create an OpenWeather Account
* Go to https://home.openweathermap.org/.

* Click on Sign Up (or Sign In if you already have an account).

* Complete the registration process (email + password).

###  Step 2: Generate Your API Key

* In the Dashboard, go to the API Keys section.

* By default, there is an API key called default. You can use this or create a new one by:

* Clicking "Create key"


Copy the API key – you'll need it to make requests.

GET /api/weather?city=[cityname]
Just type a city name in the input box and press the button to fetch the weather.

The package.json includes a "proxy" field for easier API calls without CORS issues.
