const Crawler = require("crawler");

module.exports = ({ league_url, element }) => {

    var c = new Crawler({
        maxConnections : 10,
    
        callback: (error, res, done) => {
            if (error) {
                console.log(error);
            } else {
                var $ = res.$;

                const data = $(element);

                var result = data[2].children;

                console.log(result);
            }

            done();
        }
    });

    c.queue(league_url);
}