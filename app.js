const API_KEY= `49c275aa3fa869484cf572de4ac7ee12`

const form=document.querySelector("form");
const weather=document.querySelector("#weather");
const search=document.querySelector("#search");



const getWeather= async(city)=>{
    weather.innerHTML=`Loading...`;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data= await response.json();
    console.log(data);
    return showWeather(data);
}

const showWeather=(data)=>{

    if(data.cod == '404'){

        weather.innerHTML=`The City has not been found`;
        return;
    }

    weather.innerHTML=`
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" id="image">
</div>
<div>
    <h2>${data.main.temp} °C</h2>
    <h4>${data.weather[0].main}</h4>
    
</div>
    
    `}



form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value);
        event.preventDefault();
    }
)




// const API= `https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid={API key}`

// const IMG_URL= `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


