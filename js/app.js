console.log('This is the best News app in the world.');

// Intialize the news api parameter
let key = 'zfuGM6iE9UbZKS3n7WhQUY2M4RvdmiCt7-jQCjvL-1DTy65Z';
let source = 'bbc-news';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.currentsapi.services/v1/search?language=en&apiKey=${key}`, true);

xhr.onload = function () {
    // this gives error of 426 (required upgrade)
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.news;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(`${element.description}`);
            newsHtml += `<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body"> ${element["description"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
            </div>
        </div>`;   
        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured");
    }
}

xhr.send();