const countriesContainer=document.querySelector('.container') 
const btn=document.querySelector('.btn-cuntry')
const API='https://restcountries.com/v3.1/'
const renderError=function(err){
    countriesContainer.insertAdjacentText('beforeend',`Something went wrong ${err}`)
    countriesContainer.style.opacity=1
}
const renderCountry=function(info,className=''){
    

        const html = `
         <article class="country ${className}" >
            <img class="country__img" src="${info.flags.png}" alt="Country Flag">
            <div class="country__data">
                <h3 class="country__name">${info.name.common}</h3>
                <h4 class="country__region">${info.region}</h4>
                <p class="country__row"><span>🧍‍♀️🧍‍♂️ </span>${(info.population / 1000000).toFixed(1)} mln</p>
                <p class="country__row"><span>Capital: </span>${info.capital ? info.capital[0] : 'No Capital'}</p>
                <p class="country__row"><span>StartOfWeek: </span>${info.startOfWeek}</p>
            </div>
         </article>
        `;

        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
}

const getCountryData=function(country){
    const data=fetch(`${API}name/${country}`)
    .then(res=>{
        if(!res.ok)
            throw new Error(`Country not found ${res.status}`)
        return res.json()

    }
    )
    .then(([data])=>{
        renderCountry(data)
        const [neighbour]=data.borders
        return fetch(`${API}alpha/${neighbour}`)
    }).then(data=>{
        if(!data.ok)
            throw new Error(`Neighbour not found ${data.status}`)
        return data.json()
        
    }).then(function([neighbour]){
        renderCountry(neighbour,'neighbour')
        
    }).catch(err=>{
        console.error(err);
        
        renderError(err)
    })
}
btn.addEventListener('click',()=>{
    getCountryData('uzbekistasn')
})


// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.responseText);
//         const [info] = data;
//         const [neighbour]=info.borders
        
//         renderCountry(info)
//         const request2=new XMLHttpRequest()
//         request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`)
//         request2.send()
        
//         request2.addEventListener('load',()=>{
//             const [neighbourInfo]=JSON.parse(request2.responseText) 
//             console.log(neighbourInfo);
//             a=neighbourInfo.languages.prs
            


//             console.log(a);
            
            
//             renderCountry(neighbourInfo,'neighbour')
//         })
        
//     });
// };
// getCountryData('uzbekistan')
