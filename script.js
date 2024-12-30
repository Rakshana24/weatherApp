const apiKey="b184f05e427eb1600e5d7803099bc953";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector("#content1 input");
const searchbtn=document.querySelector("#content1 button");
const weatherimg=document.querySelector("#sun img");
async function checkWeather(city)
{
    
    const response= await fetch(apiurl + city + `&appid=${apiKey}`);
    var data= await  response.json();
console.log(data);
document.querySelector("#degree h2").innerHTML=data.name;
document.querySelector("#degree h1").innerHTML=data.main.temp+"°C";
document.querySelector("#humidity p").innerHTML=data.main.humidity+"%";
document.querySelector("#windspeed p").innerHTML=data.wind.speed+"km/h";
if(data.weather[0].main=="Clouds")
{
  weatherimg.src="cloud4.png";
}
else if(data.weather[0].main=="Clear")
    {
      weatherimg.src="—Pngtree—sun png clipart colored_5656301.png";
    }
else if(data.weather[0].main=="Drizzle")
    {
      weatherimg.src="drizzle2.png";
    }
else if(data.weather[0].main=="Mist")
    {
      weatherimg.src="mist2.png";
    }
else if(data.weather[0].main=="Rain")
    {
      weatherimg.src="rain2.png";
    }

}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})

