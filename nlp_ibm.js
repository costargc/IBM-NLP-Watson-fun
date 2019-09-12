const axios = require('axios');
const fs = require('fs');

var myresumelink = 'https://costargc.github.io/';

axios(
    {
        url: 'https://cors-anywhere.herokuapp.com/https://natural-language-understanding-demo.ng.bluemix.net/api/analyze',
        method: 'post',
        contentType: 'application/json',
        data: {
            features: { concepts: {}, entities: {}, keywords: {}, categories: {}, emotion: {}, sentiment: {}, semantic_roles: {}, syntax: { tokens: { lemma: true, part_of_speech: true }, sentences: true } },
            url: myresumelink
        },
        headers: {
            'origin': 'https://cors-anywhere.herokuapp.com/https://natural-language-understanding-demo.ng.bluemix.net/api/analyze'
        },
        json: true
    }
).then(function (response) {
    results = response.data.results
    console.log(response.data.results);
    fs.writeFile("data.json", JSON.stringify(results), function (error) { if (error) { return console.log(error) } });

}).catch(function (error) {
    console.log(error);
});