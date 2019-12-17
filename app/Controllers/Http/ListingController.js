'use strict'

class ListingController {
    async view ({params,view}){
        return view.render('listing', {test: params})

    }
    
}

module.exports = ListingController
