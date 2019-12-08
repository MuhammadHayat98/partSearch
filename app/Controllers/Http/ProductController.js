'use strict'
const amazonScraper = require('amazon-buddy')
var sortJsonArray = require('sort-json-array');

class ProductController {
    
    async search( { params }) {
        //search amz
        let amz = await this.amzSearch(params.product)
        // return JSON.stringify(sorted)
        return JSON.stringify(amz)
        //search newegg
    }
    //returns list of 10 products
    async amzSearch(productName) {
        let products = await amazonScraper.products({keyword: productName, number: 10, save: false})
        return products
    }

}

module.exports = ProductController
