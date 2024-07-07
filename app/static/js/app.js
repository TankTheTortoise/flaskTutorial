async function fetchData(api = "https://api.chucknorris.io/jokes/random") {
    if (api != "https://api.chucknorris.io/jokes/random") {
        api = "https://api.chucknorris.io/jokes/random?category=" + api;
    }
    try {
        const response = await fetch(api);

        if (!response.ok) {
            throw new Error("Could not fetch Chuck");

        }

        const data = await response.json();
        console.log(data);
        text.textContent = data.value;
        img.src = window.location.origin + "/static/img/ChuckNorris/" + (Math.floor(Math.random() * 11) + 1).toString() + ".jpg";
        console.log(window.location.origin);
    } catch (error) {
        console.error(error);
    }
}

async function queryData(query) {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/search?query=" + query);
        if (!response.ok) {
            throw new Error("Could not fetch query");

        }
        const data = await response.json();
        text.textContent = data["result"][0]["value"];
        img.src = window.location.origin + "/static/img/ChuckNorris/" + (Math.floor(Math.random() * 11) + 1).toString() + ".jpg";


    } catch (error) {
        console.error(error);
    }
}


const img = document.getElementById("space");

img.src = window.origin + "/static/img/ChuckNorris/" + (Math.floor(Math.random() * 11) + 1).toString() + ".jpg";

const text = document.createElement("p", {id: "text"})
const btn = document.getElementById('any');
const text_div = document.getElementById("jokes");
text_div.appendChild(text);


const search = document.getElementById("searcher");
const textBox = document.getElementById("search");


const animal = document.getElementById("animal")
const celebrity = document.getElementById("celebrity")
const dev = document.getElementById("dev")
const explicit = document.getElementById("explicit")
const fashion = document.getElementById("fashion")
const food = document.getElementById("food")
const history = document.getElementById("history")
const money = document.getElementById("money")
const movie = document.getElementById("movie")
const music = document.getElementById("music")
const political = document.getElementById("political")
const religion = document.getElementById("religion")
const science = document.getElementById("science")
const sport = document.getElementById("sport")
const travel = document.getElementById("travel")

btn.addEventListener('click', () => {
    fetchData();
});

animal.addEventListener('click', () => {
    fetchData("animal");
})

celebrity.addEventListener('click', () => {
    fetchData("celebrity");
})

dev.addEventListener('click', () => {
    fetchData("dev");
})

explicit.addEventListener('click', () => {
    fetchData("explicit");
})

fashion.addEventListener('click', () => {
    fetchData("fashion");
})

food.addEventListener('click', () => {
    fetchData("food");
})

history.addEventListener('click', () => {
    fetchData("history");
})

money.addEventListener('click', () => {
    fetchData("money");
})

movie.addEventListener('click', () => {
    fetchData("movie");
})

music.addEventListener('click', () => {
    fetchData("music");
})

political.addEventListener('click', () => {
    fetchData("political");
})

religion.addEventListener('click', () => {
    fetchData("religion");
})

science.addEventListener('click', () => {
    fetchData("science");
})

sport.addEventListener('click', () => {
    fetchData("sport");
})

travel.addEventListener('click', () => {
    fetchData("travel");
})

search.addEventListener('click', () => {
    queryData(textBox.value);
})






/*
animal
celebrity
dev
explicit
fashion
food
history
money
movie
music
political
religion
science
sport
travel
*/