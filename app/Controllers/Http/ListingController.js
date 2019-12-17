'use strict'
const GSR = require('google-search-results-nodejs')
const https = require('https');
const request = require('request');
class ListingController {
    async view ({request,view}){
        let client = new GSR.GoogleSearchResults("99ecb6efc243f1e5d8cb3c5ed3fe736a412bfdaaf2158122d72f911a56dc544f")

        var parameter = {
            engine: "google",
            q: "xbox",
            google_domain: "google.com",
            gl: "us",
            hl: "en",
            tbm: "shop",
            num: "1"
        };

        var callback = function(data) {
            //console.log(data)
            return data
            //console.log(res)
        
            //console.log(res)
        }

        // Show result as JSON

        // console.log(client.json(parameter, callback));
        var res = this.getResults("t")
        console.log(res)
        return view.render('listing', {items: res});
    }

    getResults(itemName) {
        // var res = "t";
        // request('https://serpapi.com/search.json?engine=google&q=tv&google_domain=google.com&gl=us&hl=en&num=10&tbm=shop&api_key=99ecb6efc243f1e5d8cb3c5ed3fe736a412bfdaaf2158122d72f911a56dc544f', { json: true }, (err, res, body) => {
        // if (err) { return console.log(err); }
        // res = body.shopping_results[0]
        // }).end();
        // return res;
       
    
}

module.exports = ListingController
