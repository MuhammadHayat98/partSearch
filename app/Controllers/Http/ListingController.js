'use strict'
const request = require('request');
var sortJsonArray = require('sort-json-array');
class ListingController {
    async view ({request,view}){
        try {
            const items = await this.getJson(request.input('search'))
            console.log(items)
            return view.render('listing', { items: items.data })
          } catch (e) {
            console.log(e.message)
            return view.render('listing', { books: [] })
          }
        
    }

    getJson(itemName) {
        return new Promise((resolve, reject) => {
            request.get({ url: `https://serpapi.com/search.json?engine=google&q=${itemName}&location=United+States&google_domain=google.com&gl=us&hl=en&num=8&tbm=shop&api_key=99ecb6efc243f1e5d8cb3c5ed3fe736a412bfdaaf2158122d72f911a56dc544f` },
              (err, request, body) => {
                if (err) { return reject(err) }
      
                if (request.statusCode === 403) {
                  return reject(new Error('Invalid New York Times API Key'))
                }
      
                return resolve({
                  data : sortJsonArray(JSON.parse(body).shopping_results, "extracted_price")
                })
              })
          })


    }
}

module.exports = ListingController
