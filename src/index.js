const request = require('request')
const electron = require('electron')
const { shell } = electron

const click = (e) =>  {
    e.preventDefault()
    shell.openExternal(e.target.parentElement.href);
}

request('https://newsapi.org/v1/articles?source=the-hindu&sortBy=latest&apiKey=1530a5e2765a47b99553f9b41b24e7fb', 
    (error, response, body) => {
        let li = null;
        let img = null;
        let description = null;
        let imageLink = null;
        let textLink = null;
        body = JSON.parse(body);
        body.articles.forEach(article => {
            li = document.createElement('li');
            img = document.createElement('img');
            description = document.createElement('p')    
            imageLink = document.createElement('a')
            textLink = document.createElement('a')

            img.src = article.urlToImage
            description.innerHTML = article.description
            
            imageLink.href = article.url
            imageLink.target = '_blank'
            imageLink.addEventListener('click', click);
            imageLink.appendChild(img)

            textLink.href = article.url
            textLink.target = '_blank'
            textLink.addEventListener('click', click)
            textLink.appendChild(description)

            li.appendChild(imageLink)
            li.appendChild(textLink)

            document.querySelector('.news-list').appendChild(li)
        })
    })