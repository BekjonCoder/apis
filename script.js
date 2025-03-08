const request=new XMLHttpRequest()
const countriesContainer=document.querySelector('.container')
// request.open('GET','https://restcountries.com/v3/name/italy') 
request.open('GET', 'https://restcountries.com/v3.1/name/uzbekistan');

request.send()
request.addEventListener('load',()=>{
    const [info]=JSON.parse(request.responseText)
    console.log(info);
    
    const html=`
     <article class="country">
                <img class="country__img" src="${info.flags.png}" alt="${info.flags.alt}">
                <div class="country__data">
                    <h3 class="country__name">${info.name.common}</h3>
                    <h4 class="country__region">${info.region}</h4>
                    <p class="country__row"><span>🧍‍♀️🧍‍♂️ </span>${(info.population/1000000).toFixed(1)}</p>
                    <p class="country__row"><span>Capital: </span>${info.capital[0]}</p>
                    <p class="country__row"><span>Borders: </span>${info.borders[0], info.borders[1],info.borders[2],info.borders[3],info.borders[4]}</p>
                </div>
            </article>
            `
            countriesContainer.insertAdjacentHTML('beforeend',html)
            countriesContainer.style.opacity=1
})