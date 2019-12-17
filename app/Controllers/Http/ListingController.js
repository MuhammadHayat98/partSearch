'use strict'

class ListingController {
    async view ({request,view}){
        console.log(request.input('search'))
        return view.render('listing')

    }
    
}

module.exports = ListingController
