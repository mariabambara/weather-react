import React from "react";
import axios from "axios";

export default function Weather(){
function handleResponse(response){
    alert(`The weather in Toronto is ${response.data.main.temp} degrees.`);
}    
    let apiKey = "7458bcff34170905446c53d8d18fc507";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

    return (
        <h2>Hello from Weather</h2>
    )
}