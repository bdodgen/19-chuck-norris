// Use document.querySelector to select all the necessary elements and store them into variables.

const heading = document.querySelector('.heading');
const button = document.querySelector('.button');
const text = document.querySelector('.text');
const url = 'https://api.chucknorris.io/jokes/random';

// Create a function getJoke which will fetch the joke from API Chuck Norris Jokes API and display it in the paragraph.

const getJoke = async () => {
  const jokeDataFromAPI = await fetch(url);
  const joke = await jokeDataFromAPI.json();
  console.log(joke.value);
  text.innerHTML = `<img src="${joke.icon_url}" alt="broken pic"> <br>` + joke.value;
};

// getJoke();
// getJoke();
// Add click event listener to the button that will call getJoke function.

button.addEventListener('click', () => getJoke())

// If you check API's URL you can see that there is an icon_url, use it to display the icon on the page.
