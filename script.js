const city = document.querySelector("#city");
const btn = document.querySelector("button");
let img = document.querySelector("img");
let l = document.querySelector(".logo");
let rain = "https://images.unsplash.com/photo-1618557703025-7ec58c83581a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
let cloud = 'https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3VkJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';
let mist = 'https://plus.unsplash.com/premium_photo-1668791193861-383d104d7cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWlzdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D';
let snow = 'https://images.unsplash.com/photo-1566995290940-0ee390b86baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNub3clMjB3ZWF0aGVyfGVufDB8fDB8fHww';
let clear = 'https://images.unsplash.com/photo-1642447733831-2cdd9f5efae7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NhdHRlcmVkJTIwY2xvdWR8ZW58MHx8MHx8fDA%3D';
let haze = 'https://images.unsplash.com/photo-1604424288891-7f0871867e09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhhemUlMjB3ZWF0aGVyfGVufDB8fDB8fHww';
async function check(c) {
    const api = "47478d5295e361bbcd31135688c2a330";
    const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + c + '&appid=47478d5295e361bbcd31135688c2a330';
    const response = await fetch(url)
    var data = await response.json()
    console.log(data)
    temp.innerHTML = data.main.temp + '°C';
    we.innerHTML = data.weather[0].description;
    humidity.innerHTML = data.main.humidity + '%';
    wind.innerHTML = data.wind.speed + 'km/hr';
    switch (data.weather[0].main) {
        case 'Rain':
            img.src = rain;
            break;
        case 'Cloud':
            img.src = cloud;
            break;
        case 'Snow':
            img.src = snow;
            break;
        case 'Mist':
            img.src = mist;
            break;
        case 'Clear':
            img.src = clear;
            break;
        case 'Haze':
            img.src = haze;
            break;
    }
}
btn.addEventListener("click", function() {
    check(city.value)
})