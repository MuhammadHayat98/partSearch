'use strict'
const request = require('request');
var sortJsonArray = require('sort-json-array');
const Env = use('Env')
const key = Env.get('API_KEY')
class ListingController {
    async view ({request,view}){
        try {
            const items = await this.getJson(request.input('search'))
            console.log(items)
            return view.render('listing', { items: items.data })
          } catch (e) {
            console.log(e.message)
            return view.render('listing', { items: [] })
          }
        
    }

    getJson(itemName) {
        return new Promise((resolve, reject) => {
            request.get({ url: `https://serpapi.com/search.json?engine=google&q=${itemName}&location=United+States&google_domain=google.com&gl=us&hl=en&num=40&tbm=shop&api_key=${key}` },
              (err, request, body) => {
                if (err) { return reject(err) }
      
                if (request.statusCode === 403) {
                  return reject(new Error('Invalid Key'))
                }
      
                return resolve({
                  data : sortJsonArray(JSON.parse(body).shopping_results, "extracted_price")
                })
              })
          })


    }
}

module.exports = ListingController
