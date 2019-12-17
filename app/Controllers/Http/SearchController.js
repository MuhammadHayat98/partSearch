'use strict'

class SearchController {
    async view({view}){
        return view.render('search')
    }
}

module.exports = SearchController
