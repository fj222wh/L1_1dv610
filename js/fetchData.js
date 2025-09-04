/**
 * Fetches the data from the API.
 */

export async function getCatPicture() {
    const apiKey = 'live_nXvPKiGk07dhi7fi57A8LUvveH2M81OMy1OPtpY0eixa0bHtMA0eIX2xzKu4ZEAI'
    const url = 'https://api.thecatapi.com/v1/images/search'

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "x-api-key": apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return data[0].url

    } catch(error) {
        console.log(error)
    }
}

export async function getRandomQuote() {
    try {

        const response = await fetch('../data/quotes.json', {
            method: 'GET'
        });

        if(!response.ok) {
            throw new Error('Something went wrong when trying to fetch the random quote')
        }

        const data = await response.json()
    
        const random = Math.floor(Math.random() * data.length)
        console.log(random)
        const quote = data[random]
        return quote.quote

    } catch(error) {
        console.log(error)
    }
}
