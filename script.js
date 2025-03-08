const countriesContainer=document.querySelector('.container') 


const getCountryData=function(country){
    const request=new XMLHttpRequest()
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

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
                    <p class="country__row"><span>StartOfWeek: </span>${info.borders[0], info.startOfWeek}</p>
                </div>
            </article>
            `
            countriesContainer.insertAdjacentHTML('beforeend',html)
            countriesContainer.style.opacity=1
})
}
getCountryData('uzbekistan')
getCountryData('arab')
getCountryData('italy')
getCountryData('russian')
getCountryData('germany')
getCountryData('france')
getCountryData('united')
getCountryData('united kingdom')
getCountryData('Afghanistan');
getCountryData('Albania');
getCountryData('Algeria');
getCountryData('Andorra');
getCountryData('Angola');
getCountryData('Argentina');
getCountryData('Armenia');
getCountryData('Australia');
getCountryData('Austria');
getCountryData('Azerbaijan');
getCountryData('Bahamas');
getCountryData('Bahrain');
getCountryData('Bangladesh');
getCountryData('Barbados');
getCountryData('Belarus');
getCountryData('Belgium');
getCountryData('Belize');
getCountryData('Benin');
getCountryData('Bhutan');
getCountryData('Bolivia');
getCountryData('Bosnia and Herzegovina');
getCountryData('Botswana');
getCountryData('Brazil');
getCountryData('Brunei');
getCountryData('Bulgaria');
getCountryData('Burkina Faso');
getCountryData('Burundi');
getCountryData('Cambodia');
getCountryData('Cameroon');
getCountryData('Canada');
getCountryData('Cape Verde');
getCountryData('Central African Republic');
getCountryData('Chad');
getCountryData('Chile');
getCountryData('China');
getCountryData('Colombia');
getCountryData('Comoros');
getCountryData('Congo');
getCountryData('Costa Rica');
getCountryData('Croatia');
getCountryData('Cuba');
getCountryData('Cyprus');
getCountryData('Czech Republic');
getCountryData('Denmark');
getCountryData('Djibouti');
getCountryData('Dominica');
getCountryData('Dominican Republic');
getCountryData('Ecuador');
getCountryData('Egypt');
getCountryData('El Salvador');
getCountryData('Equatorial Guinea');
getCountryData('Eritrea');
getCountryData('Estonia');
getCountryData('Eswatini');
getCountryData('Ethiopia');
getCountryData('Fiji');
getCountryData('Finland');
getCountryData('France');
getCountryData('Gabon');
getCountryData('Gambia');
getCountryData('Georgia');
getCountryData('Ghana');
getCountryData('Greece');
getCountryData('Grenada');
getCountryData('Guatemala');
getCountryData('Guinea');
getCountryData('Guinea-Bissau');
getCountryData('Guyana');
getCountryData('Haiti');
getCountryData('Honduras');
getCountryData('Hungary');
getCountryData('Iceland');
getCountryData('India');
getCountryData('Indonesia');
getCountryData('Iran');
getCountryData('Iraq');
getCountryData('Ireland');
getCountryData('Jamaica');
getCountryData('Japan');
getCountryData('Jordan');
getCountryData('Kazakhstan');
getCountryData('Kenya');
getCountryData('Kiribati');
getCountryData('Kuwait');
getCountryData('Kyrgyzstan');
getCountryData('Laos');
getCountryData('Latvia');
getCountryData('Lebanon');
getCountryData('Lesotho');
getCountryData('Liberia');
getCountryData('Libya');
getCountryData('Liechtenstein');
getCountryData('Lithuania');
getCountryData('Luxembourg');
getCountryData('Madagascar');
getCountryData('Malawi');
getCountryData('Malaysia');
