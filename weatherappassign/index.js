let weather = { //This line declares a variable named "weather" and assigns it an object literal.
   "apikey": "999fdbb07aa15dda3861ff532e8c4f18", //This line declares a property named "apikey" with a string value.
   fetchWeather: function (city) {      //This line declares a method named "fetchWeather" that takes in a parameter named "city".
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)  //This line sends a request to the OpenWeatherMap API to fetch weather data for the specified city using the API key provided in the "apikey" property.
      .then((response) => response.json())  //This line converts the response from the API to JSON format.
      .then((data) => this.displayWeather(data));  //This line calls the "displayWeather" method with the JSON data as an argument.
   }, //This line ends the "fetchWeather" method.
   displayWeather: function (data) { //This line declares a method named "displayWeather" that takes in a parameter named "data".
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind; //These lines use destructuring assignment to extract data from the "data" object.

      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + "Km/h"; //These lines set the text content and image source of various HTML elements with the extracted data.

      document.querySelector(".weather").classList.remove("loading"); //This line removes the "loading" class from the HTML element with the class "weather".

      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')"; //This line sets the background image of the HTML body to a random image related to the current city, obtained from the Unsplash API.
   },
   search: function () { //This line declares a method named "search" with no parameters.
      let searchBarValue = document.querySelector(".search-bar").value; //This line gets the value of the search bar input field and assigns it to a variable named "searchBarValue".
      if (searchBarValue) { 
         this.fetchWeather(searchBarValue);
      } else {
         this.fetchWeather("Lagos");
      } //This code block checks whether "searchBarValue" is truthy or falsy. If it's truthy, it calls the "fetchWeather" method with "searchBarValue" as an argument. Otherwise, it calls the "fetchWeather" method with "Lagos" as the argument.

   }, 
};

document.querySelector(".search button").addEventListener("click", function () {
   weather.search(); //This line adds an event listener to the button element within
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
   if (event.key === "Enter") {
      weather.search();
   }
}); //this code sets up a listener for the "Enter" key being pressed in the search bar and triggers a weather search function when that key is detected.

// Load Lagos weather by default
weather.fetchWeather("Lagos");









// // The code defines an object called weather which has three methods fetchWeather, displayWeather, and search. It also defines an apikey property and has two event listeners for a search bar button click and an "Enter" keypress.

// The fetchWeather method uses the fetch function to make an API call to retrieve the current weather data for a specific city. It takes a city argument, which is appended to the API URL to specify which city to get the weather data for.

// The response from the API call is processed using response.json() and the resulting data is passed to the displayWeather method.

// The displayWeather method takes the weather data as an argument and extracts specific properties like name, icon, description, temp, humidity, and speed from the response data. It then uses these properties to update the HTML elements on the page to display the weather information for the specified city.

// The search method retrieves the value from the search bar input field and calls fetchWeather with that value if it is not empty. If the search bar input is empty, it defaults to fetching the weather data for Lagos, Nigeria.

// The event listeners on the search bar button click and "Enter" keypress call the search method to fetch and display the weather information for the specified city.

// Finally, the code loads the weather data for Lagos by default when the page is first loaded.