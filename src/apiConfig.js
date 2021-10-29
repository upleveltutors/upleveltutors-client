// Set up apiconfig file to switch between development and production. 
let apiUrl
const apiUrls = {
    production: 'https://cryptic-crag-36212.herokuapp.com',
    development: 'http://localhost:4741'
}

if (windows.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrl.production
}

export default apiUrl