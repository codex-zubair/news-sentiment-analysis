// Api Calling For news sentiment check.




// *npm install sentiment*

// !Sentiment Section Start...
var Sentiment = require('sentiment');

var sentiment = new Sentiment();
var doc = sentiment.analyze(`'Negative reviews reflect a customer's first-hand poor experience with your product. Negative reviews can either be 'good negative reviews' or 'bad negative reviews'. Here's an example of one such review in which the customer clearly explains their issue with the product after using it for some time'`);
console.log(doc.score);
// !Sentiment Section End...