'use strict'
const Favorite = use('App/Models/Favorite')
//const { validate } = use('Validator')
class SearchController {
    async view({ request, auth, response, view }){
        return view.render('search')
    }
}

module.exports = SearchController
