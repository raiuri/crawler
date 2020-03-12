const prompt = require('prompt');
const crawler = require('../crawler');

prompt.start();

prompt.get(['league_url', 'element'], (err, result) => {
    if (err)
        return console.log(err);

    crawler(result);
});

// crawler(input);


