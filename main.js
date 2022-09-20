// Api Calling For news sentiment check.
function lookAPI(url) {
    fetch('https://newsapi.org/v2/everything?q=fc augsburg vs hertha berlin&from=2022-08-04&sortBy=publishedAt&apiKey=14b2e3e7662147e9a2564a6ed5717285')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

}




// !Sentiment Section Start...
var Sentiment = require('sentiment');

var sentiment = new Sentiment();
var doc = sentiment.analyze(`'Negative reviews reflect a customer's first-hand poor experience with your product. Negative reviews can either be 'good negative reviews' or 'bad negative reviews'. Here's an example of one such review in which the customer clearly explains their issue with the product after using it for some time'`);
console.log(doc.score);
// !Sentiment Section End...