//text for API Response success
async function getResults(keyword, API_KEY = '', page=1) {
    let apiResponse = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${API_KEY}&${page}`)
    //console.log(apiResponse)
    return apiResponse.data
}


//Search keyword(s) from submit button event
async function loadResults(event) {
    event.preventDefault();
    //console.log(event);
    let keyword = event.target[0].value;
    //console.log(keyword);
    let results = await getResults(keyword);
    //console.log(results.response);
    
    let hits = results.response.meta.hits;
    //display number of search results in HTML
    document.getElementById("ahits").innerHTML ="Number of results: " + hits;
    
    let offset = results.response.meta.offset;
    //offset will be used for pagination of results
    console.log(offset);
    let resultsarray = results.response.docs
    //save results as array rather than results object so I can iterate thru it later
    console.log(resultsarray)
    
    //iterate thru each item in the current offset
    resultsarray.forEach((item) => {console.log(item.headline.main)});
    //print to console to make sure its working
    //then send each item as an argument to the createArticleList function
    resultsarray.forEach((item) => {createArticleList(item)});      
} 

function createArticleList(item) { 
    //get headline data for the item
    let headline = item.headline.main;
    document.getElementById("aheadline").innerHTML = headline
    //console.log(headline);
    
    //get url link data for the item
    let link = item.web_url;
    document.getElementById("alink").innerHTML = link
    //console.log(link);
    
    //get image url for the item
    //I intended to build a try catch for articles that don't have an image, but ran out of time
    let imageURL = item.multimedia[0].url;
    const img = document.querySelector('#image');
    img.setAttribute('src', `https://static01.nyt.com/${imageURL}`);
    document.getElementById("image").innerHTML = image
    //console.log(image);
}

//event listener for submit button in search form
let form = document.querySelector('#form')
form.addEventListener('submit', loadResults);

