const loadWeather = ()=>{
    const searchInput = document.getElementById('search-input') 
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=62e68a1f3c53c5b583269a6310ad00c0`

    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetails(data ))
}
const displayDetails = data=>{
    
    const displayDoc = document.getElementById('display')
    displayDoc.textContent=''
    const div = document.createElement('div')       
    div.innerHTML= `
    <img style="width: 100px;" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"  >
    
    <h3>${data['name']}</h3>
    <h3>${Math.round(data['main']['temp']-273)}&deg C</h3>
    <h3>${data['weather'][0]['description']}</h3> `
    displayDoc.appendChild(div)


}
