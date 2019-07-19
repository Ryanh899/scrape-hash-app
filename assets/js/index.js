//required libraries 
var axios = require('axios'); 
var cheerio = require('cheerio');
// var admin = require('firebase-admin');

//hashtags array 
var hashtags = []; 
//incrementing array 
var inc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//query url and query parameter
var query = 'fish'; 
var queryUrl = 'https://hashtagify.me/hashtag/' + query ; 
//axios get call to hashtagify
axios.get(queryUrl)
    .then((response) => {
        const $ = cheerio.load(response.data); 
        const urlElems = $('div#word_cloud.jqcloud'); 
        var newElem =urlElems.find('span#word_cloud_word_0.w10'); 
        // console.log(newElem); 
        for (var i = 0; i < 1; i++) {
            const word = newElem.find('a.wordcloudlink'); 
            // console.log(word); 
            // if(word) {
            //     const urlText = word.text()
            //     console.log(urlText)
            //     hashtags.push(urlText); 
            //     console.log(hashtags)
            // } else {
            //     console.log('does not exist')
            // }
        }
        
        
    })
    .catch((err) => console.log(err))

    function increment () {
        for (var i = 0; i < 10; i++) {
             console.log(i) 
        }
    }
    console.log(increment())
