## Exercise: Fetching Data using useEffect

### Instructions

You have been assigned to build a simple weather app using React. Your app should utilize the WeatherAPI to fetch and display the current weather data for a specified city.

1. Create a new React app

2. In your app, create a component named `WeatherApp`.

3. Inside the `WeatherApp` component, set up a state variable to store the weather data. You can initialize it to `null`.

4. Use the `useEffect` hook to fetch weather data from the WeatherAPI when the component mounts. The API endpoint for getting weather data for a city looks like this:`https://api.weatherapi.com/v1/current.json?key={YOUR_API_KEY}&q={city_name}`. Replace city_name with the name of the city you want to fetch data for, and replace `YOUR_API_KEY` with your actual API key.

5. Parse the response from the API and update the weather data state with the fetched data.

6. Display the temperature from the weather data in your component's JSX.

7. Style your app as you like, and make sure it's visually appealing.
