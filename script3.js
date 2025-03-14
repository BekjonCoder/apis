// const countriesContainer=document.querySelector('.container') 
// const renderCountry=function(info,className=''){
    

//         const html = `
//          <article class="country ${className}" >
//             <img class="country__img" src="${info.flags.png}" alt="Country Flag">
//             <div class="country__data">
//                 <h3 class="country__name">${info.name.common}</h3>
//                 <h4 class="country__region">${info.region}</h4>
//                 <p class="country__row"><span>🧍‍♀️🧍‍♂️ </span>${(info.population / 1000000).toFixed(1)} mln</p>
//                 <p class="country__row"><span>Capital: </span>${info.capital ? info.capital[0] : 'No Capital'}</p>
//                 <p class="country__row"><span>StartOfWeek: </span>${info.startOfWeek}</p>
//             </div>
//          </article>
//         `;

//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
// }
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

const data=fetch('https://restcountries.com/v3.1/name/uzbekistan').then(function(res){
    console.log(res);
    
})
console.log(data);
