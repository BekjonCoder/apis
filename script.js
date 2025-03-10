const countriesContainer=document.querySelector('.container') 

const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', () => {
        const data = JSON.parse(request.responseText);
        const [info] = data;
        console.log(info);

        const html = `
         <article class="country">
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
    });
};
[
    'Uzbekistan', 'Russia', 'Italy', 'Germany', 'France', 'United Kingdom', 'United States', 'Egypt', 'Japan', 'India',
    'Kazakhstan', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia',
    'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros',
    'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
    'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia',
    'Fiji', 'Finland', 'Gabon', 'Gambia', 'Georgia', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea',
    'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
    'Jamaica', 'Jordan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
    'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia'
].forEach(getCountryData)